import { FC, ReactElement } from "react";
import Button from "../../components/Button";
import CONSTANTS from "../../constants";
import { AdminNavOption } from "../../interfaces";

interface AdminNavProps {
  selectedOption: string;
  setSelectedOption: (option: AdminNavOption) => void;
}

const { MOVIES, RESERVATIONS } = CONSTANTS.TEXT.ADMIN_NAV;

const AdminNav: FC<AdminNavProps> = ({
  selectedOption,
  setSelectedOption,
}): ReactElement => {
  const onClickMovies = () => {
    setSelectedOption(AdminNavOption.Movies);
  };
  const onClickReservations = () => {
    setSelectedOption(AdminNavOption.Reservations);
  };

  const buttonsContent = [
    { text: MOVIES, icon: "movies", onClick: onClickMovies },
    { text: RESERVATIONS, icon: "ticket-solid", onClick: onClickReservations },
  ];

  return (
    <div className="w-80 bg-gray-800 min-h-screen text-white pl-10 pt-16 text-xl">
      <div className="flex flex-col justify-center">
        {buttonsContent.map((buttonContent) => (
          <Button
            onClick={buttonContent.onClick}
            text={buttonContent.text}
            leftIconAlt={buttonContent.icon}
            leftIconSrc={`/${buttonContent.icon}.svg`}
            iconJustify="justify-center"
            key={`admin-nav-option-${buttonContent.text}`}
            className={`w-40 h-16 ${
              selectedOption === buttonContent.text && "bg-gray-400 rounded-xl"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminNav;
