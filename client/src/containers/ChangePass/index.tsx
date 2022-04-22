import { FC, ReactElement, useState } from "react";
import {
  loginError,
  loginSuccess,
  UserData,
  UserLoginData,
} from "../../actions/user";
import api from "../../api";
import Button from "../../components/Button";
import CONSTANTS from "../../constants";
import InputError from "../InputError";

interface ChangePassProps {
  userData: {
    data: UserData;
  };
  login: (loginData: UserLoginData) => void;
}

const {
  CHANGE_PASSWORD,
  CONFIRM_NEW_PASSWORD,
  CURRENT_PASSWORD,
  NEW_PASSWORD,
  SAVE,
  FILL_FIELD,
} = CONSTANTS.TEXT.CHANGE_PASS;

const inputsClassName = "w-80";

const ChangePass: FC<ChangePassProps> = ({ userData, login }): ReactElement => {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const [errorCurrent, setErrorCurrent] = useState<string>("");
  const [errorNew, setErrorNew] = useState<string>("");
  const [errorConfirm, setErrorConfirm] = useState<string>("");

  const onChangeCurrentPassword = (newValue: string) => {
    setCurrentPassword(newValue);
    setErrorCurrent("");
  };
  const onChangeNewPassword = (newValue: string) => {
    setNewPassword(newValue);
    setErrorNew("");
  };
  const onChangeConfirmNewPassword = (newValue: string) => {
    setConfirmNewPassword(newValue);
    setErrorConfirm("");
  };

  const onClickSave = async () => {
    if (!currentPassword.length) {
      setErrorCurrent(FILL_FIELD);
      return;
    } else if (!newPassword.length) {
      setErrorNew(FILL_FIELD);
      return;
    } else if (!confirmNewPassword.length) {
      setErrorConfirm(FILL_FIELD);
      return;
    }
    // userData.
    const data = {
      email: userData.data.email,
      password: currentPassword,
    };
    login(data);

    // TODO: Handle success login -> change pass otherwise show errors
    const res = await api.post(data, CONSTANTS.SERVER_PATHS.LOGIN);
    if (res.status === 201) {
      const jsonRes = await res.json();
      if (loginSuccess) {
        // setMatchShow(true);
        loginSuccess(jsonRes.data);
      }
    } else {
      if (loginError) {
        // setNoMatchShow(true);
        loginError();
      }
    }
  };

  return (
    <div>
      <div className="text-white text-2xl mb-6">{CHANGE_PASSWORD}</div>
      <InputError
        value={currentPassword}
        onChange={onChangeCurrentPassword}
        errorText={errorCurrent}
        placeholder={CURRENT_PASSWORD}
        errorInputContainerClassName={inputsClassName}
        password
        invertEyeColor
      />
      <InputError
        value={newPassword}
        onChange={onChangeNewPassword}
        errorText={errorNew}
        placeholder={NEW_PASSWORD}
        errorInputContainerClassName={inputsClassName}
        password
        invertEyeColor
      />
      <InputError
        value={confirmNewPassword}
        onChange={onChangeConfirmNewPassword}
        errorText={errorConfirm}
        placeholder={CONFIRM_NEW_PASSWORD}
        errorInputContainerClassName={inputsClassName}
        password
        invertEyeColor
      />
      <Button
        onClick={onClickSave}
        text={SAVE}
        className={`w-36 h-8 mt-4 bg-primary text-black hover:shadow-lg hover:shadow-cyan-300/50`}
      />
    </div>
  );
};

export default ChangePass;
