import { useCallback, useEffect, useState } from "react";
import { FC, ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import TrailerModal from "../../components/TrailerModal";
import CONSTANTS from "../../constants";
import NavbarContainer from "../../containers/Navbar/container";
import { MovieInterface } from "../../interfaces/user";
import { checkDays, formatMinutes } from "../../utils";
import ReservationModal from "../../components/ReservationModal";
import { UserData } from "../../actions/user";

interface MovieProps {
  userData: {
    isLoggedIn: boolean;
    data: UserData;
  };
}

interface DateOption {
  date: string;
  time: string;
  hallId: string;
}

const {
  PREMIERE,
  TITLE,
  PRODUCTION_YEAR,
  GENRE,
  ACTORS,
  FORMAT,
  DIRECTION,
  TRAILER,
  RESERVE,
} = CONSTANTS.TEXT.MOVIE_PAGE;

const Movie: FC<MovieProps> = ({ userData }): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showReservationModal, setShowReservationModal] =
    useState<boolean>(false);
  const [showTrailer, setShowTrailer] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieInterface | null>(null);
  const [dateOptions, setDateOptions] = useState<DateOption[]>([]);
  const [selectedDateOption, setSelectedDateOption] = useState<DateOption>(
    {} as DateOption
  );
  const [triggerLogin, setTriggerLogin] = useState<boolean>(false);

  const getMovieDateTimeOptions = useCallback(() => {
    if (!movie) {
      return;
    }

    const newDateOptions: DateOption[] = [];
    movie.runningTimes.forEach((entry) => {
      const stringToDate = new Date(`${entry.time}`);
      const newDate = checkDays(stringToDate);
      const newTime = `${stringToDate.getHours()}:${stringToDate.getMinutes()}`;
      newDateOptions.push({
        date: newDate,
        time: newTime,
        hallId: entry.hallId,
      });
    });
    setDateOptions(newDateOptions);
    setSelectedDateOption(newDateOptions[0]);
  }, [movie]);

  const getTimeOptionsForSelectedDate = () => {
    const date = dateOptions.filter(
      (option) => selectedDateOption.date === option.date
    );
    return date.map((option) => option.time);
  };

  const getDateOptions = () => {
    return [...new Set(dateOptions.map((option) => option.date))];
  };

  useEffect(() => {
    const getMovieData = async () => {
      const movieData = await api.get(`/movie?id=${id}`);
      const movieJsonData = await movieData.json();
      setMovie(movieJsonData[0]);
    };
    getMovieData();
  }, [id]);

  useEffect(() => {
    getMovieDateTimeOptions();
  }, [getMovieDateTimeOptions]);

  const toggleTrailerModal = () => {
    setShowTrailer((a) => !a);
  };

  const onClickReserve = () => {
    if (!userData.isLoggedIn) {
      setTriggerLogin(true);
      return;
    }
    setShowReservationModal((a) => !a);
  };

  const onChangeDate = (newDate: string) => {
    const newDateOption = dateOptions.filter(
      (option) => option.date === newDate
    )[0];
    setSelectedDateOption(newDateOption);
  };

  const onChangeTime = (newTime: string) => {
    const newTimeOption = dateOptions.filter(
      (option) => option.time === newTime
    )[0];
    setSelectedDateOption(newTimeOption);
  };

  const onClickConfirm = () => {
    navigate(
      `/seats/${id}/${selectedDateOption.date.substring(
        selectedDateOption.date.indexOf(": ") + 2,
        selectedDateOption.date.length
      )}/${selectedDateOption.time}/${selectedDateOption.hallId}/${
        movie?.is3D ? "3D" : "normal"
      }/${movie?.title}`
    );
  };

  const hideReservationModal = () => {
    if (showReservationModal) {
      setShowReservationModal(false);
    }
  };

  return (
    <div className="text-white pb-14">
      <NavbarContainer
        triggerLogin={triggerLogin}
        setTriggerLoginFalse={() => setTriggerLogin(false)}
      />
      {showTrailer && movie && movie?.trailerUrl && (
        <TrailerModal
          showModal={showTrailer}
          youtubeLink={movie?.trailerUrl}
          toggle={toggleTrailerModal}
        />
      )}
      <ReservationModal
        showModal={showReservationModal}
        onClickConfirm={onClickConfirm}
        dateOptions={getDateOptions()}
        timeOptions={getTimeOptionsForSelectedDate()}
        selectedDateOption={selectedDateOption.date}
        selectedTimeOption={selectedDateOption.time}
        onChangeDate={onChangeDate}
        onChangeTime={onChangeTime}
        hideModal={hideReservationModal}
      />
      {movie && (
        <div className="md:px-20 lg:px-60 py-10">
          <div className="mb-10 text-3xl text-center">{movie.title}</div>
          <div className={`flex gap-10 flex-col items-center sm:flex-row`}>
            <Icon
              src={movie.coverImageUrl}
              alt="cover-image-url"
              className="w-60 border-2 border-blue-300"
            />
            <div>
              {movie.isPremiere && (
                <div className="flex items-center">
                  <Icon
                    src="/p-solid.svg"
                    alt="premiere-icon"
                    className="bg-blue-500 w-6 h-6 mr-1 border-2 border-blue-300"
                  />
                  <div>{PREMIERE}</div>
                </div>
              )}
              <div className="flex flex-col gap-10">
                <div>
                  {TITLE}: {movie.title}
                </div>
                <div>
                  {DIRECTION}: {movie.direction}
                </div>
                <div>
                  {ACTORS}: {movie.actors}
                </div>
                <div>
                  {GENRE}: {movie.genre}
                </div>
                <div>
                  {FORMAT}: {movie.is3D ? "3D" : "Normal"}
                </div>
                <div>
                  {PRODUCTION_YEAR}: {movie.productionYear}
                </div>
              </div>
              <Button
                onClick={onClickReserve}
                text={RESERVE}
                className={`w-36 h-8 mt-8 bg-primary text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
              />
            </div>
          </div>
          <div className="flex items-center mt-6 mx-10 sm:mx-0">
            <Icon
              src={"/clock-solid.svg"}
              alt="clock-icon"
              className="w-4 h-4 mr-2 items-center"
            />
            <div>{formatMinutes(movie.length)}</div>
            {movie.trailerUrl && (
              <Button
                text={TRAILER}
                onClick={toggleTrailerModal}
                className={`w-20 h-8 bg-red-300 rounded-md ml-6 text-black`}
                leftIconSrc="/youtube-brands.svg"
                leftIconAlt="trailer-icon"
              />
            )}
          </div>
          <div className="mt-10 border-b-2 mx-10 sm:mx-0" />
          <div className="mt-6 text-xl mx-10 sm:mx-0">{movie.description}</div>
        </div>
      )}
    </div>
  );
};

export default Movie;
