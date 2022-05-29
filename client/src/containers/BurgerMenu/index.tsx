import { FC, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../actions/user";
import Dropdown from "../../components/Dropdown";
import CONSTANTS from "../../constants";

interface BurgerMenuProps {
  userData: {
    isLoggedIn: boolean;
    data: UserData;
  };
  showLogin: () => void;
}

const { OPTIONS } = CONSTANTS.TEXT.BURGER_MENU;

const BurgerMenu: FC<BurgerMenuProps> = ({
  userData,
  showLogin,
}): ReactElement => {
  const navigate = useNavigate();
  const [showList, setShowList] = useState<boolean>(false);

  const onClickBurger = () => {
    setShowList((a) => !a);
  };

  const hide = () => {
    if (showList) {
      setShowList(false);
    }
  };

  const onClickOption = (option: string) => {
    if (option === OPTIONS[0]) {
      navigate("/");
    } else if (option === OPTIONS[1]) {
      navigate("/prices");
    } else if (option === OPTIONS[2]) {
      if (!userData.isLoggedIn) {
        showLogin();
        return;
      }
      navigate("/my-account");
    } else if (option === "Admin") {
      navigate("/admin");
    }
  };

  return (
    <div className={`w-full flex justify-start mx-10`}>
      <div className="space-y-2 relative" onClick={onClickBurger}>
        <div className="w-8 h-0.5 bg-gray-300"></div>
        <div className="w-8 h-0.5 bg-gray-300"></div>
        <div className="w-8 h-0.5 bg-gray-300"></div>
        <Dropdown
          show={showList}
          options={userData?.data?.isAdmin ? [...OPTIONS, "Admin"] : OPTIONS}
          onClickOption={onClickOption}
          hide={hide}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
