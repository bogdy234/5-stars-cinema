import { FC, ReactElement, useState } from "react";
import Button from "../../components/Button";
import CONSTANTS from "../../constants";
import { UserState } from "../../reducers/user";
import LoginModalContainer from "../LoginModal/container";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
    userData?: UserState;
}

const { MY_ACCOUNT, HOME, LOGIN } = CONSTANTS.TEXT.NAVBAR;

const Navbar: FC<NavbarProps> = ({ userData }: NavbarProps): ReactElement => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState<boolean>(false);

    const toggle = () => {
        setShowLogin((a) => !a);
    };

    const conditionalLogin = () => {
        if (!userData) return;
        const { isLoggedIn, data } = userData;
        if (isLoggedIn) {
            return (
                <Button
                    onClick={toggle}
                    text={`${MY_ACCOUNT}(${data?.firstName} ${data?.lastName})`}
                    className="rounded-lg mr-20 transition duration-300 text-white hover:text-black hover:bg-cyan-100 w-100 h-16 pl-4 pr-4"
                />
            );
        } else {
            return (
                <Button
                    onClick={toggle}
                    text={LOGIN}
                    className="rounded-lg mr-20 transition duration-300 text-white hover:text-black hover:bg-cyan-100 w-20 h-16"
                />
            );
        }
    };

    const onClickHome = () => {
        navigate("/");
    };

    return (
        <div className="w-full h-24 bg-gray-800 flex justify-between items-center">
            <Button
                onClick={onClickHome}
                text={HOME}
                className="rounded-lg ml-20 transition duration-300 text-white hover:text-black hover:bg-cyan-100 w-20 h-16"
            />
            {showLogin && (
                <LoginModalContainer
                    showModal={showLogin}
                    closeModal={toggle}
                />
            )}
            {conditionalLogin()}
        </div>
    );
};

export default Navbar;
