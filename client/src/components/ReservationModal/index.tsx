import { FC, ReactElement } from "react";
import Modal from "../Modal";
import CONSTANTS from "../../constants";
import Button from "../Button";

interface ReservationModalProps {
    showModal: boolean;
    onClickConfirm: () => void;
    message: string;
    dateOptions: string[];
    timeOptions: string[];
    selectedDateOption: string;
    selectedTimeOption: string;
    onChangeDate: (date: string) => void;
    onChangeTime: (time: string) => void;
}

const { CONFIRM, PLEASE_SELECT } = CONSTANTS.TEXT.RESERVATION_MODAL;

const ReservationModal: FC<ReservationModalProps> = ({
    showModal,
    onClickConfirm,
    dateOptions,
    timeOptions,
    selectedDateOption,
    selectedTimeOption,
    onChangeDate,
    onChangeTime,
}: ReservationModalProps): ReactElement => {
    return (
        <Modal showModal={showModal}>
            <div className={`flex justify-center items-center h-full`}>
                <div
                    className={`w-5/6 md:w-1/2 lg:w-1/3 h-1/2 rounded-3xl bg-gray-700`}
                >
                    <div
                        className={
                            "flex justify-center flex-col items-center gap-4 mt-16"
                        }
                    >
                        <div className={`text-2xl`}>{PLEASE_SELECT}</div>
                        <select
                            className={
                                "bg-gray-300 w-1/2 h-14 rounded-xl pl-2 text-black"
                            }
                            value={selectedDateOption}
                            onChange={(e) => onChangeDate(e.target.value)}
                        >
                            {dateOptions.map((option) => (
                                <option key={`option-${Math.random() * 1000}`}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={"flex justify-center mt-10 text-black"}>
                        <select
                            className={"bg-gray-300 w-1/2 h-14 rounded-xl pl-2"}
                            value={selectedTimeOption}
                            onChange={(e) => onChangeTime(e.target.value)}
                        >
                            {timeOptions.map((option) => (
                                <option key={`option-${Math.random() * 1000}`}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={`flex justify-center mt-20`}>
                        <Button
                            onClick={onClickConfirm}
                            text={CONFIRM}
                            className={`w-36 h-8 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ReservationModal;
