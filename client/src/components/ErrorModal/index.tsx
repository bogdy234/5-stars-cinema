import React, { FC, ReactElement } from "react";
import CONSTANTS from "../../constants";
import Icon from "../Icon";
import Button from "../Button";
import Modal from "../Modal";

interface SuccessModalProps {
    showModal: boolean;
    onClose: () => void;
}

const { ERROR_MODAL } = CONSTANTS.TEXT;

const ErrorModal: FC<SuccessModalProps> = ({
    showModal,
    onClose,
}: SuccessModalProps): ReactElement => {
    return (
        <Modal showModal={showModal}>
            <div className={`flex justify-center items-center h-full`}>
                <div
                    className={`bg-white w-5/6 md:w-1/2 lg:w-1/3 h-1/2 rounded-3xl`}
                >
                    <div
                        className={`w-full h-1/2 bg-red-500 rounded-t-3xl flex justify-center items-center`}
                    >
                        <div className={"w-24 h-24"}>
                            <Icon
                                src={"/circle-xmark-solid.svg"}
                                alt={"success-icon"}
                            />
                        </div>
                    </div>
                    <div
                        className={`flex justify-center items-center flex-col`}
                    >
                        <p className={`pt-6 pb-6 text-2xl w-5/6 text-center`}>
                            {ERROR_MODAL.MESSAGE}
                        </p>
                        <Button
                            onClick={onClose}
                            text={ERROR_MODAL.CLOSE}
                            className={`bg-red-500 rounded-2xl w-40 h-16`}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ErrorModal;
