import { FC, ReactElement } from "react";

import Footer from "../../containers/Footer";
import MoviesArea from "../../containers/MoviesArea";
import NavbarContainer from "../../containers/Navbar/container";
import SeatTile from "../../components/SeatTile";
import {SeatStatus} from "../../interfaces/seat";

interface HomeProps {}

const Home: FC<HomeProps> = (): ReactElement => {
    return (
        <>
            <div>
                <NavbarContainer />
                <SeatTile seatStatus={SeatStatus.Available} seatRow={2} seatColumn={4} />
                <MoviesArea />
                <Footer />
            </div>
        </>
    );
};

export default Home;
