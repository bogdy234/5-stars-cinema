import { FC, ReactElement } from "react";
import Footer from "../../containers/Footer";
import NavbarContainer from "../../containers/Navbar/container";

interface HomeProps {}

const Home: FC<HomeProps> = (): ReactElement => {
    return (
        <>
            <div>
                <NavbarContainer />
                <Footer />
            </div>
        </>
    );
};

export default Home;
