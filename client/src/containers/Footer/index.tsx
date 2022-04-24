import { FC, ReactElement, useState } from "react";
import CONSTANTS from "../../constants";
import Button from "../../components/Button";
import SuccessModal from "../../components/SuccessModal";
import useShowModal from "../../utils/hooks/useShowModal";
import ErrorModal from "../../components/ErrorModal";
import api from "../../api";
import InputError from "../InputError";
import { isEmail } from "../../utils";

interface FooterProps {}

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const { FOOTER } = CONSTANTS.TEXT;

const Footer: FC<FooterProps> = (): ReactElement => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [subject, setSubject] = useState<string>("");
  const [subjectError, setSubjectError] = useState<string>("");

  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const { showSuccess, showError, toggleSuccess, toggleError } = useShowModal();

  const onChangeName = (newValue: string) => {
    setNameError("");
    setName(newValue);
  };
  const onChangeEmail = (newValue: string) => {
    setEmailError("");
    setEmail(newValue);
  };
  const onChangeSubject = (newValue: string) => {
    setSubjectError("");
    setSubject(newValue);
  };
  const onChangeMessage = (newValue: string) => {
    setMessageError("");
    setMessage(newValue);
  };

  const handleNameErrors = () => {
    if (!name) {
      setNameError(FOOTER.EMPTY);
      return true;
    }
    return false;
  };

  const handleEmailErrors = () => {
    if (!email) {
      setEmailError(FOOTER.EMPTY);
      return true;
    }
    if (!isEmail(email)) {
      setEmailError(FOOTER.EMAIL_ERROR);
      return true;
    }
    return false;
  };

  const handleSubjectErrors = () => {
    if (!subject) {
      setSubjectError(FOOTER.EMPTY);
      return true;
    }
    return false;
  };
  const handleMessageErrors = () => {
    if (!message) {
      setMessageError(FOOTER.EMPTY);
      return true;
    }
    return false;
  };

  const clearAllErrors = () => {
    setSubjectError("");
    setEmailError("");
    setNameError("");
    setMessageError("");
  };

  const checkForErrors = () => {
    if (handleNameErrors()) {
      return true;
    }
    if (handleEmailErrors()) {
      return true;
    }
    if (handleSubjectErrors()) {
      return true;
    }
    if (handleMessageErrors()) {
      return true;
    }
    return false;
  };

  const onSend = async () => {
    if (checkForErrors()) {
      return;
    }
    clearAllErrors();
    const data: ContactBody = { name, email, subject, message };
    const res = await api.post(data, "/user/contact");
    if (res.status === 201) {
      toggleSuccess();
    } else {
      toggleError();
      console.error(res);
      // TODO: Modal error
    }
  };

  return (
    <div className="h-screen bg-gray-800 flex flex-col items-center">
      <SuccessModal
        showModal={showSuccess}
        onClose={toggleSuccess}
        message={CONSTANTS.TEXT.SUCCESS_MODAL.CONTACT_MESSAGE}
      />
      <ErrorModal showModal={showError} onClose={toggleError} />
      <h1 className="text-gray-200  pt-12 pb-20 text-6xl text-center md:text-left">
        {FOOTER.CONTACT_US}
      </h1>
      <InputError
        placeholder={FOOTER.YOUR_NAME}
        value={name}
        onChange={onChangeName}
        errorText={nameError}
        errorInputContainerClassName={"w-1/2 max-w-[500px]"}
      />
      <InputError
        placeholder={FOOTER.YOUR_EMAIL}
        value={email}
        onChange={onChangeEmail}
        errorText={emailError}
        errorInputContainerClassName={"w-1/2 max-w-[500px]"}
      />
      <InputError
        placeholder={FOOTER.SUBJECT}
        value={subject}
        onChange={onChangeSubject}
        errorText={subjectError}
        errorInputContainerClassName={"w-1/2 max-w-[500px]"}
      />
      <InputError
        placeholder={FOOTER.MESSAGE}
        value={message}
        onChange={onChangeMessage}
        errorText={messageError}
        errorInputContainerClassName={"w-1/2 max-w-[500px]"}
      />
      <Button
        onClick={onSend}
        text={FOOTER.SEND}
        className="bg-white rounded-full w-48 mt-10 ease-in duration-300 hover:bg-cyan-500 hover:text-white h-16"
      />
    </div>
  );
};

export default Footer;
