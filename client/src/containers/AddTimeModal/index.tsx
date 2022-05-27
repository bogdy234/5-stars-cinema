import { FC, ReactElement, useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
import useClickOutside from "../../utils/hooks/useClickOutside";

import Timekeeper from "react-timekeeper";
import CONSTANTS from "../../constants";
import Button from "../../components/Button";
import api from "../../api";
import Select from "../../components/Select";
import { Hall } from "../../interfaces/hall";

interface AddTimeModalProps {
  showModal: boolean;
  closeModal: () => void;
  movieId: string;
}

const { CHOOSE_DATE, CONFIRM, CHOOSE_HALL } = CONSTANTS.TEXT.ADD_TIME_MODAL;

const AddTimeModal: FC<AddTimeModalProps> = ({
  showModal,
  closeModal,
  movieId,
}): ReactElement => {
  const [hallNumbers, setHallNumbers] = useState<number[]>([]);
  const [hallNumber, setHallNumber] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("10:00");
  const ref = useRef(null);
  useClickOutside(ref, closeModal);

  const onChangeTime = (newValue: any) => {
    setTime(newValue.formatted24);
  };

  const onClickConfirm = async () => {
    const getResponse = await api.get(`/movie?id=${movieId}`);
    const getJson = await getResponse.json();

    const hallResponse = await api.get(
      `/hall/readByNumber?number=${hallNumber}`
    );
    const jsonHallResponse = await hallResponse.json();

    const data = {
      id: movieId,
      updatedValue: {
        runningTimes: [
          ...getJson[0].runningTimes,
          {
            time: new Date(`${date} ${time}`).toISOString(),
            hallId: jsonHallResponse[0]._id,
          },
        ],
      },
    };
    const putResponse = await api.put(data, "/movie");
    const jsonPutResponse = await putResponse.json();
    console.log(jsonPutResponse);
  };

  const onChangeHall = (newValue: string) => {
    setHallNumber(parseInt(newValue));
  };

  const getAllHallNumbers = async () => {
    const response = await api.get("/hall/getAllHalls");
    const json = await response.json();
    setHallNumbers(json.map((hall: Hall) => hall.number));
    setHallNumber(json[0].number);
  };

  useEffect(() => {
    getAllHallNumbers();
  }, []);

  return (
    <Modal showModal={showModal}>
      <div className="h-full flex justify-center items-center">
        <div
          className="bg-gray-300 w-2/3 h-5/6 flex items-center flex-col pb-10 pt-10"
          ref={ref}
        >
          <div className="flex flex-col justify-center items-center gap-10">
            <div>
              <div className="w-48 text-xl">{CHOOSE_DATE}</div>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>
            <Timekeeper time={time} onChange={onChangeTime} hour24Mode />
            <div>
              <p>{CHOOSE_HALL}</p>
              <Select
                options={hallNumbers.map((hallNumber) => `${hallNumber}`)}
                value={`${hallNumber}`}
                onChange={onChangeHall}
              />
            </div>
            <Button
              onClick={onClickConfirm}
              text={CONFIRM}
              className={`w-36 h-8 mt-8 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddTimeModal;
