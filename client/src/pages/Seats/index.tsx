import { FC, ReactElement, useEffect, useLayoutEffect, useState } from "react";
import SeatArea from "../../components/SeatArea";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import { Seat } from "../../interfaces/seat";
import NavbarContainer from "../../containers/Navbar/container";
import CONSTANTS from "../../constants";
import Button from "../../components/Button";
import { UserData } from "../../actions/user";
import SuccessModal from "../../components/SuccessModal";
import useShowModal from "../../utils/hooks/useShowModal";
import { useCallback } from "react";

const { CONFIRM, SUCCESS } = CONSTANTS.TEXT.SEATS;

interface SeatsProps {
    userData: { data: UserData };
}

const Seats: FC<SeatsProps> = ({ userData }): ReactElement => {
    const navigate = useNavigate();
    const { movieId, hallId, date, time } = useParams();
    const [rows, setRows] = useState<number>(0);
    const [columns, setColumns] = useState<number>(0);
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
    const [reservedSeats, setReservedSeats] = useState<Seat[]>([]);
    const { showSuccess, showError, toggleError, toggleSuccess } =
        useShowModal();

    const getHallData = useCallback(async () => {
        const hallData = await api.get("/hall?id=62516463cef32ef16bea456f");
        const jsonHallData = await hallData.json();
        setRows(jsonHallData[0].rows);
        setColumns(jsonHallData[0].columns);
    }, []);

    useLayoutEffect(() => {
        getHallData();
    }, [getHallData]);

    const getReservedSeats = useCallback(async () => {
        const reservedSeats = await api.get(
            `/reservation/getReservedSeats?movieId=${movieId}&hallId=${hallId}&movieTiming=${date} ${time}`
        );
        const jsonReservedSeats = await reservedSeats.json();
        setReservedSeats([...jsonReservedSeats]);
    }, [date, hallId, movieId, time]);

    useEffect(() => {
        getReservedSeats();
    }, [getReservedSeats]);

    const onClickConfirm = async () => {
        if (!selectedSeats.length) {
            return;
        }

        const data = {
            userId: userData.data._id,
            movieId,
            bookedSeats: selectedSeats,
            movieTiming: `${date} ${time}`,
            hallId,
        };
        const response = await api.post(data, "/reservation");
        console.log(response);
        if (response.ok) {
            toggleSuccess();
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
    };

    const onCloseModal = () => {
        navigate("/");
    };

    return (
        <div>
            <NavbarContainer />
            <SuccessModal
                showModal={showSuccess}
                onClose={onCloseModal}
                message={SUCCESS}
            />
            {rows > 0 && columns > 0 && (
                <SeatArea
                    reservedSeats={reservedSeats}
                    rows={rows}
                    columns={columns}
                    selectedSeats={selectedSeats}
                    setSelectedSeats={setSelectedSeats}
                />
            )}
            <div className={`flex justify-center mb-10`}>
                <Button
                    onClick={onClickConfirm}
                    text={CONFIRM}
                    className={`w-36 h-8 mt-8 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
                />
            </div>
        </div>
    );
};

export default Seats;
