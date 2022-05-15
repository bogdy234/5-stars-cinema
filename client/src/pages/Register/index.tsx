import { FC, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import Button from "../../components/Button";
import ErrorModal from "../../components/ErrorModal";
import SuccessModal from "../../components/SuccessModal";
import CONSTANTS from "../../constants";
import InputError from "../../containers/InputError";
import NavbarContainer from "../../containers/Navbar/container";
import { isEmail, isOnlyNumericInput, isValidPhoneNumber } from "../../utils";
import {
    containerClassName,
    errorInputContainerClassName,
    inputClassName,
    labelClassName,
} from "./style";

interface RegisterProps {}

const {
    EMAIL,
    EMAIL_ERROR,
    FIRST_NAME,
    LAST_NAME,
    PASSWORD,
    PHONE_NUMBER,
    REGISTER,
    PHONE_NUMBER_ERROR,
    EMPTY_ERROR,
} = CONSTANTS.TEXT.REGISTER;

const Register: FC<RegisterProps> = (): ReactElement => {
    const navigate = useNavigate();
    const [firstNameError, setFirstNameError] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");

    const [lastNameError, setLastNameError] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const [emailError, setEmailError] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const [passwordError, setPasswordError] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [phoneNumberError, setPhoneNumberError] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const [showSuccessModal, setShowSuccesModal] = useState<boolean>(false);
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

    const onChangeFirstName = (newValue: string) => {
        setFirstNameError("");
        setFirstName(newValue);
    };
    const onChangeLastName = (newValue: string) => {
        setLastNameError("");
        setLastName(newValue);
    };
    const onChangeEmail = (newValue: string) => {
        setEmailError("");
        setEmail(newValue);
    };

    const onChangePassword = (newValue: string) => {
        setPasswordError("");
        setPassword(newValue);
    };

    const onChangePhoneNumber = (newValue: string) => {
        if (!isOnlyNumericInput(newValue)) {
            return;
        }
        setPhoneNumberError("");
        setPhoneNumber(newValue);
    };

    const onClickRegister = async () => {
        if (!firstName) {
            setFirstNameError(EMPTY_ERROR);
            return;
        }
        if (!lastName) {
            setLastNameError(EMPTY_ERROR);
            return;
        }
        if (!email) {
            setEmailError(EMPTY_ERROR);
            return;
        }
        if (!isEmail(email)) {
            setEmailError(EMAIL_ERROR);
            return;
        }
        if (!password) {
            setPasswordError(EMPTY_ERROR);
            return;
        }
        if (!phoneNumber) {
            setPhoneNumberError(EMPTY_ERROR);
            return;
        }
        if (!isValidPhoneNumber(phoneNumber)) {
            setPhoneNumberError(PHONE_NUMBER_ERROR);
            return;
        }
        const data = { firstName, lastName, email, password, phoneNumber };
        const res = await api.post(data, "/user");
        if (res.status === 201) {
            setShowSuccesModal(true);
        } else {
            setShowErrorModal(true);
        }
        // TODO: put conditions for password
    };

    const onCloseModal = () => {
        navigate("/");
    };

    return (
        <div className="bg-gray-700 min-h-screen w-full pb-20">
            <NavbarContainer />
            <SuccessModal
                showModal={showSuccessModal}
                onClose={onCloseModal}
                message={CONSTANTS.TEXT.SUCCESS_MODAL.REGISTER}
            />
            <ErrorModal showModal={showErrorModal} onClose={onCloseModal} />
            <div className="m-auto w-1/2 mt-8 flex flex-col gap-8">
                <InputError
                    value={firstName}
                    onChange={onChangeFirstName}
                    inputClassName={inputClassName}
                    label={FIRST_NAME}
                    labelClassName={labelClassName}
                    containerClassName={containerClassName}
                    errorText={firstNameError}
                    errorInputContainerClassName={errorInputContainerClassName}
                    setMaxWidthSmall
                />
                <InputError
                    value={lastName}
                    onChange={onChangeLastName}
                    inputClassName={inputClassName}
                    label={LAST_NAME}
                    labelClassName={labelClassName}
                    containerClassName={containerClassName}
                    errorText={lastNameError}
                    errorInputContainerClassName={errorInputContainerClassName}
                    setMaxWidthSmall
                />
                <InputError
                    value={email}
                    onChange={onChangeEmail}
                    inputClassName={inputClassName}
                    label={EMAIL}
                    labelClassName={labelClassName}
                    containerClassName={containerClassName}
                    errorText={emailError}
                    errorInputContainerClassName={errorInputContainerClassName}
                    setMaxWidthSmall
                />
                <InputError
                    value={password}
                    onChange={onChangePassword}
                    inputClassName={inputClassName}
                    label={PASSWORD}
                    labelClassName={labelClassName}
                    containerClassName={containerClassName}
                    errorText={passwordError}
                    errorInputContainerClassName={errorInputContainerClassName}
                    password
                    setMaxWidthSmall
                />
                <InputError
                    value={phoneNumber}
                    onChange={onChangePhoneNumber}
                    inputClassName={inputClassName}
                    label={PHONE_NUMBER}
                    labelClassName={labelClassName}
                    containerClassName={containerClassName}
                    errorText={phoneNumberError}
                    errorInputContainerClassName={errorInputContainerClassName}
                    setMaxWidthSmall
                />
                <div className="w-full">
                    <Button
                        onClick={onClickRegister}
                        text={REGISTER}
                        className={`w-36 h-8 mt-8 bg-primary text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
