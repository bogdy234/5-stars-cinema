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

const AddTimeModal: FC<AddTimeModalProps> = ({ showModal, closeModal, movieId }): ReactElement => {
    const [hallNumbers, setHallNumbers] = useState<number[]>([]);
    const [hallNumber, setHallNumber] = useState<number>(0);
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("10:00");
    const ref = useRef(null);
    useClickOutside(ref, closeModal);

    const onChangeTime = (newValue: any) => {
        console.log("this");
        setTime(newValue.formatted24);
    };

    const onClickConfirm = async () => {
        console.log("here");
        const getResponse = await api.get(`/movie?id=${movieId}`);
        // console.log(getResponse);
        const getJson = await getResponse.json();
        console.log(getJson);
        const hallResponse = await api.get(`/hall/read-by-number?hallNumber=${hallNumber}`);
        const jsonHallResponse = await hallResponse.json();

        console.log(jsonHallResponse);
        const data = {
            id: movieId,
            updatedValue: {
                runningTimes: [
                    ...getJson.runningTimes,
                    {
                        time: new Date(`${date} ${time}`).toISOString(),
                        hallId: jsonHallResponse._id,
                    },
                ],
            },
        };
        const putResponse = await api.put(data, "/movie");
        console.log(putResponse);
        const jsonPutResponse = await putResponse.json();
        console.log(jsonPutResponse);
    };

    const onChangeHall = (newValue: string) => {
        setHallNumber(parseInt(newValue));
    };

    useEffect(() => {
        const getAllHallNumbers = async () => {
            const response = await api.get("/hall/get-all-halls");
            const { data } = await response.json();
            setHallNumbers(data.map((hall: Hall) => hall.number));
            setHallNumber(data[0].number);
        };

        getAllHallNumbers();
    }, []);

    return (
        <Modal showModal={showModal}>
            <div className="h-full flex justify-center items-center">
                <div className="bg-gray-300 w-2/3 h-5/6 flex items-center flex-col pb-10 pt-10" ref={ref}>
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
