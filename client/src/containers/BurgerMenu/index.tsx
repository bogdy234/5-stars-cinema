import { FC, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import CONSTANTS from "../../constants";

interface BurgerMenuProps {}

const { OPTIONS } = CONSTANTS.TEXT.BURGER_MENU;

const BurgerMenu: FC<BurgerMenuProps> = (): ReactElement => {
  const navigate = useNavigate();
  const [showList, setShowList] = useState<boolean>(false);

  const onClickBurger = () => {
    setShowList((a) => !a);
  };

  const toggle = () => {
    setShowList(!showList);
  };

  const onClickOption = (option: string) => {
    if (option === OPTIONS[0]) {
      navigate("/");
    } else if (option === OPTIONS[1]) {
      navigate("/my-account");
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
          options={OPTIONS}
          onClickOption={onClickOption}
          hide={toggle}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
