import { FC, ReactElement, useEffect, useState } from "react";
import Button from "../../components/Button";
import CONSTANTS from "../../constants";
import { UserState } from "../../reducers/user";
import LoginModalContainer from "../LoginModal/container";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import BurgerMenuContainer from "../BurgerMenu/container";

interface NavbarProps {
    userData?: UserState;
    triggerLogin?: boolean;
    setTriggerLoginFalse?: () => void;
}

const { HOME, LOGIN, PRICES, ADMIN } = CONSTANTS.TEXT.NAVBAR;
const { SM } = CONSTANTS.SCREENS;
const { MY_ACCOUNT } = CONSTANTS.ROUTES;

const Navbar: FC<NavbarProps> = ({ userData, triggerLogin, setTriggerLoginFalse }: NavbarProps): ReactElement => {
    const matches = useMediaQuery(`(min-width:${SM})`);
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState<boolean>(false);

    useEffect(() => {
        if (triggerLogin && setTriggerLoginFalse) {
            setShowLogin(true);
            setTriggerLoginFalse();
        }
    }, [setTriggerLoginFalse, triggerLogin]);

    console.log(userData);

    const toggle = () => {
        if (userData?.isLoggedIn) {
            navigate(MY_ACCOUNT);
            return;
        }
        setShowLogin((a) => !a);
    };

    const displayLogin = () => {
        setShowLogin(true);
    };
    const conditionalLogin = () => {
        if (!userData) return;
        const { isLoggedIn, data } = userData;
        if (isLoggedIn) {
            return (
                <>
                    <Button
                        leftIconSrc="/user-solid.svg"
                        leftIconAlt="user-icon"
                        onClick={toggle}
                        text={`${data?.firstName} ${data?.lastName}`}
                        className="rounded-lg mr-20 transition duration-300 text-white hover:text-black hover:bg-cyan-100 w-100 h-16 pl-4 pr-4"
                    />
                </>
            );
        } else {
            return (
                <Button
                    onClick={toggle}
                    text={LOGIN}
                    className="rounded-lg mr-20 transition duration-300 text-white hover:text-black hover:bg-cyan-100 w-28 h-16"
                />
            );
        }
    };

    const onClickHome = () => {
        navigate("/");
    };

    const renderLogin = () => {
        if (showLogin) {
            return <LoginModalContainer showModal={showLogin} closeModal={toggle} />;
        }

        return null;
    };

    const onClickPrices = () => {
        navigate("/prices");
    };

    const onClickAdmin = () => {
        navigate("/admin");
    };

    return (
        <div className="w-full h-24 bg-gray-800 flex justify-between items-center">
            {matches ? (
                <>
                    <div>
                        <Button
                            onClick={onClickHome}
                            text={HOME}
                            className="rounded-lg ml-20 transition duration-300 text-white hover:text-black hover:bg-cyan-100 w-20 h-16"
                        />
                        <Button
                            onClick={onClickPrices}
                            text={PRICES}
                            className="rounded-lg ml-20 transition duration-300 text-white hover:text-black hover:bg-cyan-100 w-20 h-16"
                        />
                        {userData?.data?.isAdmin && (
                            <Button
                                onClick={onClickAdmin}
                                text={ADMIN}
                                className="rounded-lg ml-20 transition duration-300 text-white hover:text-black hover:bg-cyan-100 w-20 h-16"
                            />
                        )}
                    </div>
                    {renderLogin()}
                    {conditionalLogin()}
                </>
            ) : (
                <>
                    {" "}
                    <BurgerMenuContainer showLogin={displayLogin} />
                    {renderLogin()}
                </>
            )}
        </div>
    );
};

export default Navbar;
