import { FC, ReactElement, useEffect, useState } from "react";
import { UserData } from "../../actions/user";
import api from "../../api";
import Button from "../../components/Button";
import CONSTANTS from "../../constants";
import theme from "../../theme";
import InputError from "../InputError";

interface MyAccountDataProps {
  userData?: { data: UserData };
}

const { PERSONAL_DATA, FIRST_NAME, LAST_NAME, PHONE_NUMBER, SAVE } =
  CONSTANTS.TEXT.MY_ACCOUNT_DATA;

const { USER } = CONSTANTS.SERVER_PATHS;

const inputClass = `w-80`;

const MyAccountData: FC<MyAccountDataProps> = ({ userData }): ReactElement => {
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    const data = userData?.data;
    if (!data) {
      return;
    }

    setFirstName(data?.firstName);
    setLastName(data?.lastName);
    setPhoneNumber(data?.phoneNumber);
  }, [userData?.data]);

  const onClickSave = async () => {
    const data = {
      id: userData?.data._id,
      updatedValue: {
        firstName,
        lastName,
        phoneNumber,
      },
    };
    const response = await api.put(data, USER);
  };

  return (
    <div className={`text-black`}>
      <div className={`text-white`}>{PERSONAL_DATA}</div>
      <InputError
        value={lastName}
        onChange={(newValue: string) => setLastName(newValue)}
        errorText={""}
        inputClassName={inputClass}
        placeholder={LAST_NAME}
      />
      <InputError
        value={firstName}
        onChange={(newValue: string) => setFirstName(newValue)}
        errorText={""}
        inputClassName={inputClass}
        placeholder={FIRST_NAME}
      />
      <InputError
        value={phoneNumber}
        onChange={(newValue: string) => setPhoneNumber(newValue)}
        errorText={""}
        inputClassName={inputClass}
        placeholder={PHONE_NUMBER}
      />
      <Button
        onClick={onClickSave}
        text={SAVE}
        className={`w-36 h-8 mt-4 bg-primary text-black hover:shadow-lg hover:shadow-cyan-300/50`}
      />
    </div>
  );
};

export default MyAccountData;
