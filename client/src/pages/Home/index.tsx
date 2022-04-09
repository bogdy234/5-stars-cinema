import { FC, ReactElement } from "react";

import Footer from "../../containers/Footer";
import MoviesArea from "../../containers/MoviesArea";
import NavbarContainer from "../../containers/Navbar/container";
import SeatTile from "../../components/SeatTile";
import {SeatStatus} from "../../interfaces/seat";
import SeatArea from "../../components/SeatArea";

interface HomeProps {}

const Home: FC<HomeProps> = (): ReactElement => {
    return (
        <>
            <div>
                <NavbarContainer />
                <SeatArea rows={10} columns={10}/>
                <MoviesArea />
                <Footer />
            </div>
        </>
    );
};

export default Home;
