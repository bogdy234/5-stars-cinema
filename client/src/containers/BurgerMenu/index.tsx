import { FC, ReactElement, useState } from "react";
import Dropdown from "../../components/Dropdown";

interface BurgerMenuProps {}

const BurgerMenu: FC<BurgerMenuProps> = (): ReactElement => {
    const [showList, setShowList] = useState<boolean>(false);

    const onClickBurger = () => {
        setShowList((a) => !a);
    };

    return (
        <div className={`w-full flex justify-end mx-10`}>
            <div className="space-y-2" onClick={onClickBurger}>
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <Dropdown show={showList} options={["Logout"]} onClickOption={()=>{}}/>
            </div>
        </div>
    );
};

export default BurgerMenu;
