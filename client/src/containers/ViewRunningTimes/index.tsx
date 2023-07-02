import {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import api from "../../api";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import CONSTANTS from "../../constants";
import { RunningTime } from "../../interfaces";
import { Movie } from "../../interfaces/movies";
import useClickOutside from "../../utils/hooks/useClickOutside";

interface ViewRunningTimesProps {
  showModal: boolean;
  closeModal: () => void;
  movieId: string;
}

const { HALL_NUMBER, DELETE } = CONSTANTS.TEXT.VIEW_RUNNING_TIMES;

const ViewRunningTimes: FC<ViewRunningTimesProps> = ({
  showModal,
  closeModal,
  movieId,
}): ReactElement => {
  const ref = useRef(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [running, setRunning] = useState<RunningTime[]>([]);

  const getMovie = useCallback(async () => {
    const movieResponse = await api.get("/movie?id=" + movieId);
    const jsonResponse = await movieResponse.json();
    setMovie(jsonResponse[0]);
  }, [movieId]);

  const getRunningTimes = useCallback(async () => {
    // const runningTimes: RunningTime[] = [];
    movie?.runningTimes.forEach(async (runningTime) => {
      const response = await api.get(`/hall?id=${runningTime.hallId}`);
      const json = await response.json();
      if (!json.length) {
        return;
      }
      setRunning((prev) =>
        prev.map((prev) => prev.id).indexOf(runningTime._id) !== -1
          ? [...prev]
          : [
              ...prev,
              {
                time: runningTime.time,
                hallNumber: json[0].number,
                id: runningTime._id,
              },
            ]
      );
    });
    // setRunning(runningTimes);
  }, [movie?.runningTimes]);

  useEffect(() => {
    if (movie) {
      return;
    }
    getMovie();
  }, [getMovie, movie]);

  useEffect(() => {
    if (running.length) {
      return;
    }
    getRunningTimes();
  }, [getRunningTimes, running.length]);

  useClickOutside(ref, closeModal);

  const onClickDelete = async (runningEntry: RunningTime) => {
    const newRunningTimes = movie?.runningTimes.filter(
      (entry) => entry._id !== runningEntry.id
    );
    if (!movie) {
      return;
    }
    const newMovie = {
      id: movie._id,
      updatedValue: { runningTimes: newRunningTimes },
    };
    const response = await api.put(newMovie, "/movie");
    if (response.status === 201) {
      setMovie(null);
      setRunning([]);
    } else {
    }
  };

  return (
    <Modal showModal={showModal}>
      <div className="h-full flex justify-center items-center">
        <div
          className="bg-gray-300 w-2/3 h-5/6 flex items-center flex-col pb-10 pt-10 overflow-y-scroll"
          ref={ref}
        >
          {movie ? <div className="mb-10 text-3xl">{movie.title}</div> : null}
          {running.length
            ? running.map((runningEntry) => (
                <div
                  className="mb-20"
                  key={`runningEntry-${runningEntry.time}-${runningEntry.hallNumber}`}
                >
                  <div>{new Date(runningEntry.time).toString()}</div>
                  <div>
                    {HALL_NUMBER}: {runningEntry.hallNumber}
                  </div>
                  <Button
                    onClick={() => onClickDelete(runningEntry)}
                    text={DELETE}
                    className={`w-36 h-8 bg-red-400 text-black rounded hover:shadow-lg hover:shadow-red-300/50`}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </Modal>
  );
};

export default ViewRunningTimes;
