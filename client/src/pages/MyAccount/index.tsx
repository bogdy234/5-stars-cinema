import { FC, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CONSTANTS from "../../constants";
import ChangePassContainer from "../../containers/ChangePass/container";
import MyAccountDataContainer from "../../containers/MyAccountData/container";
import MyReservationsContainer from "../../containers/MyReservations/container";
import NavbarContainer from "../../containers/Navbar/container";

interface MyAccountProps {
  logout?: () => void;
}

enum Options {
  PersonalData,
  MyReservations,
  ChangePass,
}

const { MY_ACCOUNT, PERSONAL_DATA, MY_RESERVATIONS, CHANGE_PASS, LOGOUT } =
  CONSTANTS.TEXT.MY_ACCOUNT_PAGE;

const buttonClass = `h-12 hover:text-primary`;

const MyAccount: FC<MyAccountProps> = ({ logout }): ReactElement => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<Options>(
    Options.PersonalData
  );

  const onClickPersonalData = () => {
    setSelectedOption(Options.PersonalData);
  };
  const onClickMyReservations = () => {
    setSelectedOption(Options.MyReservations);
  };
  const onClickChangePass = () => {
    setSelectedOption(Options.ChangePass);
  };
  const onClickLogout = () => {
    if (!logout) {
      return;
    }
    logout();
    navigate("/");
  };

  // User: firstName, lastName, email, password, phoneNumber

  const getOption = () => {
    if (selectedOption === Options.PersonalData) {
      return <MyAccountDataContainer />;
    } else if (selectedOption === Options.MyReservations) {
      return <MyReservationsContainer />;
    } else if (selectedOption === Options.ChangePass) {
      return <ChangePassContainer />;
    }
  };

  return (
    <div>
      <NavbarContainer />
      <div
        className={`w-3/4 m-auto mt-10 flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-48`}
      >
        <div
          className={`bg-gray-900 text-white min-w-72 w-72 h-72 flex flex-col align-center rounded-md`}
        >
          <div className={`mx-4`}>
            <div className={`mt-4 border-b-2 text-center text-2xl`}>
              {MY_ACCOUNT}
            </div>
            <Button
              leftIconSrc="/user-solid.svg"
              leftIconAlt="user-icon"
              onClick={onClickPersonalData}
              text={PERSONAL_DATA}
              className={`${buttonClass} mt-4`}
            />
            <Button
              leftIconSrc="/calendar-checked.svg"
              leftIconAlt="calendar-icon"
              onClick={onClickMyReservations}
              text={MY_RESERVATIONS}
              className={buttonClass}
            />
            <Button
              leftIconSrc="/lock.svg"
              leftIconAlt="lock-icon"
              onClick={onClickChangePass}
              text={CHANGE_PASS}
              className={buttonClass}
            />
            <Button
              leftIconSrc="/logout.svg"
              leftIconAlt="logout-icon"
              onClick={onClickLogout}
              text={LOGOUT}
              className={buttonClass}
            />
          </div>
        </div>
        {getOption()}
      </div>
    </div>
  );
};

export default MyAccount;
