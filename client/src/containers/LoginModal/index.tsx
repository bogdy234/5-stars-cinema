import { FC, ReactElement, useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
import useClickOutside from "../../utils/hooks/useClickOutside";
import Button from "../../components/Button";
import api from "../../api";
import { UserData, UserLoginData } from "../../actions/user";

import InputError from "../InputError";
import CONSTANTS from "../../constants";
import { isEmail } from "../../utils";

interface LoginModalProps {
    showModal: boolean;
    closeModal: () => void;
    login?: (data: UserLoginData) => void;
    loginSuccess?: (data: UserData) => void;
    loginError?: () => void;
}

const { LOGIN, SUBMIT, EMAIL, PASSWORD, NO_MATCH, MATCH, NO_ACCOUNT_YET } =
    CONSTANTS.TEXT.LOGIN_MODAL;

const LoginModal: FC<LoginModalProps> = ({
    showModal,
    closeModal,
    login,
    loginSuccess,
    loginError,
}: LoginModalProps): ReactElement => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const [noMatchShow, setNoMatchShow] = useState<boolean>(false);
    const [matchShow, setMatchShow] = useState<boolean>(false);

    const loginModalRef = useRef(null);
    useClickOutside(loginModalRef, closeModal);

    useEffect(() => {
        if (!matchShow) {
            return;
        }
        setTimeout(() => {
            closeModal();
        }, 500);
    }, [matchShow, closeModal]);

    const onChangeEmail = (newValue: string) => {
        if (newValue.length > 320) {
            return;
        }
        setNoMatchShow(false);
        if (isEmail(email)) {
            setEmailError("");
        }
        setEmail(newValue);
    };

    const onChangePassword = (newValue: string) => {
        if (newValue) {
            setPasswordError("");
        }

        setPassword(newValue);
    };

    const onClickLogin = async () => {
        setNoMatchShow(false);
        if (!isEmail(email)) {
            setEmailError("This is not valid email.");
            return;
        }
        if (!password) {
            setPasswordError("Please fill this field.");
            return;
        }

        const data = { email, password };
        if (login) {
            login(data);
        }
        const res = await api.post(data, CONSTANTS.SERVER_PATHS.LOGIN);
        if (res.status === 201) {
            const jsonRes = await res.json();
            if (loginSuccess) {
                setMatchShow(true);
                loginSuccess(jsonRes.data);
            }
        } else {
            if (loginError) {
                setNoMatchShow(true);
                loginError();
            }
        }
    };

    return (
        <Modal showModal={showModal}>
            <div className={`flex justify-center items-center h-full`}>
                <div
                    className={`bg-gray-800 w-5/6 md:w-1/2 lg:w-1/3 h-[400px] rounded-3xl text-white`}
                    ref={loginModalRef}
                >
                    <div
                        className={`flex justify-center items-center flex-col`}
                    >
                        <div
                            className={`pt-6 pb-3 text-2xl w-full text-center`}
                        >
                            {LOGIN}
                            {noMatchShow && (
                                <div className={`text-red-500 text-sm pt-1`}>
                                    {NO_MATCH}
                                </div>
                            )}
                            {matchShow && (
                                <div className={`text-green-500 text-sm pt-1`}>
                                    {MATCH}
                                </div>
                            )}
                        </div>
                        <div className={`self-start w-5/6 m-auto`}>
                            <InputError
                                value={email}
                                onChange={onChangeEmail}
                                inputClassName={`bg-transparent border-b-[1px] outline-none pl-0 text-white`}
                                label={EMAIL}
                                labelClassName={`text-cyan-300`}
                                containerClassName={"w-full pb-0"}
                                errorText={emailError}
                                errorInputContainerClassName={`w-full`}
                                setMaxWidthSmall
                            />
                        </div>
                        <div className={`self-start w-5/6 m-auto pt-8`}>
                            <InputError
                                value={password}
                                onChange={onChangePassword}
                                inputClassName={`bg-transparent border-b-[1px] outline-none pl-0 text-white`}
                                label={PASSWORD}
                                labelClassName={`text-cyan-300`}
                                containerClassName={"w-full pb-0"}
                                errorText={passwordError}
                                errorInputContainerClassName={`w-full`}
                                password
                                setMaxWidthSmall
                            />
                        </div>
                        <div className="pt-4 text-center">
                            {NO_ACCOUNT_YET}{" "}
                            <a href="register" className="underline">
                                aici
                            </a>
                            .
                        </div>
                        <Button
                            onClick={onClickLogin}
                            text={SUBMIT}
                            className={`w-36 h-8 mt-4 text-cyan-300 hover:bg-[#03e9f4] hover:text-white hover:rounded hover:shadow-lg hover:shadow-cyan-300/50`}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default LoginModal;
