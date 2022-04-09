import { FC, ReactElement } from "react";
import Modal from "../Modal";
import CONSTANTS from "../../constants";
import Button from "../Button";
import Icon from "../Icon";

interface SuccessModalProps {
    showModal: boolean;
    onClose: () => void;
    message: string;
}

const { SUCCESS_MODAL } = CONSTANTS.TEXT;

const SuccessModal: FC<SuccessModalProps> = ({
    showModal,
    onClose,
    message,
}: SuccessModalProps): ReactElement => {
    return (
        <Modal showModal={showModal}>
            <div className={`flex justify-center items-center h-full`}>
                <div
                    className={`bg-white w-5/6 md:w-1/2 lg:w-1/3 h-1/2 rounded-3xl`}
                >
                    <div
                        className={`w-full h-1/2 bg-green-500 rounded-t-3xl flex justify-center items-center`}
                    >
                        <div className={"w-24 h-24"}>
                            <Icon
                                src={"/square-check-solid.svg"}
                                alt={"success-icon"}
                            />
                        </div>
                    </div>
                    <div
                        className={`flex justify-center items-center flex-col`}
                    >
                        <p
                            className={`pt-6 pb-6 text-2xl w-5/6 md:w-2/3 text-center`}
                        >
                            {message}
                        </p>
                        <Button
                            onClick={onClose}
                            text={SUCCESS_MODAL.CLOSE}
                            className={`bg-green-500 rounded-2xl w-40 h-16`}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SuccessModal;
