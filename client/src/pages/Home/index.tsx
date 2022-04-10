import { FC, ReactElement } from "react";

import Footer from "../../containers/Footer";
import MoviesArea from "../../containers/MoviesArea";
import NavbarContainer from "../../containers/Navbar/container";

interface HomeProps {}

const Home: FC<HomeProps> = (): ReactElement => {
    return (
        <>
            <div>
                <NavbarContainer />
                <MoviesArea />
                <Footer />
            </div>
        </>
    );
};

export default Home;
