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
import TicketType from "../../containers/TicketType";
import { Ticket } from "../../interfaces/ticket";
import { getPriceForDateHour } from "../../utils";

const { CONFIRM, SUCCESS } = CONSTANTS.TEXT.SEATS;

interface SeatsProps {
    userData: { data: UserData };
}
const { NORMAL_TICKETS, REDUCED_TICKETS, ERROR_NOT_ENOUGH, ERROR_NO_SEATS, ERROR_TYPES, TOTAL, HALL } =
    CONSTANTS.TEXT.SEATS_PAGE;

const Seats: FC<SeatsProps> = ({ userData }): ReactElement => {
    const navigate = useNavigate();
    const { movieId, hallId, date, time, is3D, movieTitle } = useParams();
    const [rows, setRows] = useState<number>(0);
    const [columns, setColumns] = useState<number>(0);
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
    const [reservedSeats, setReservedSeats] = useState<Seat[]>([]);
    const { showSuccess, toggleSuccess } = useShowModal();
    const [ticketNumbers, setTicketNumbers] = useState<Ticket>({
        normal: 0,
        reduced: 0,
    });
    const [confirmError, setConfirmError] = useState<string>("");
    const [hallNumber, setHallNumber] = useState<number>(0);

    const getHallData = useCallback(async () => {
        const hallData = await api.get(`/hall?id=${hallId}`);
        const jsonHallData = await hallData.json();
        setRows(jsonHallData.rows);
        setColumns(jsonHallData.columns);
        setHallNumber(jsonHallData.number);
    }, []);

    useLayoutEffect(() => {
        getHallData();
    }, []);

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
            setConfirmError(ERROR_NO_SEATS);
            return;
        } else if (ticketNumbers.normal + ticketNumbers.reduced > selectedSeats.length) {
            setConfirmError(ERROR_NOT_ENOUGH);
            return;
        } else if (ticketNumbers.normal + ticketNumbers.reduced < selectedSeats.length) {
            setConfirmError(ERROR_TYPES);
            return;
        }

        setConfirmError("");

        const data = {
            userId: userData.data._id,
            movieId,
            bookedSeats: selectedSeats,
            movieTiming: `${date} ${time}`,
            hallId,
            movieName: movieTitle,
            hallNumber,
            totalPrice: (getPrice() * ticketNumbers.normal + ticketNumbers.reduced * getPrice() * 0.8).toFixed(2),
            ticketsType: {
                normal: ticketNumbers.normal,
                reduced: ticketNumbers.reduced,
            },
        };
        const response = await api.post(data, "/reservation");

        if (response.ok) {
            toggleSuccess();
        }
    };

    const onCloseModal = () => {
        navigate("/");
    };

    const incrementNormal = () => {
        if (ticketNumbers.normal + ticketNumbers.reduced >= selectedSeats.length) {
            return;
        }
        setTicketNumbers({
            ...ticketNumbers,
            normal: ticketNumbers.normal + 1,
        });
    };

    const decrementNormal = () => {
        if (ticketNumbers.normal <= 0) {
            return;
        }
        setTicketNumbers({
            ...ticketNumbers,
            normal: ticketNumbers.normal - 1,
        });
    };

    const incrementReduced = () => {
        if (ticketNumbers.reduced + ticketNumbers.normal >= selectedSeats.length) {
            return;
        }
        setTicketNumbers({
            ...ticketNumbers,
            reduced: ticketNumbers.reduced + 1,
        });
    };

    const decrementReduced = () => {
        if (ticketNumbers.reduced <= 0) {
            return;
        }
        setTicketNumbers({
            ...ticketNumbers,
            reduced: ticketNumbers.reduced - 1,
        });
    };

    const getPrice = () => {
        const movieDate = new Date(`${date} ${time}`);
        const day = movieDate.getDay();
        // 0 = Sunday - 6 = Saturday
        // @ts-ignore
        const isAfterFive = (movieDate - new Date(`${date} 17:00`)) / 36e5 > 0;
        const isWeekend = day === 0 || day === 6 || day === 5;
        const isMovie3D = is3D === "3D";
        return getPriceForDateHour(isMovie3D, isAfterFive, isWeekend);
    };

    console.log(hallNumber);

    return (
        <div>
            <NavbarContainer />
            <SuccessModal showModal={showSuccess} onClose={onCloseModal} message={SUCCESS} />
            <div className="text-white text-center text-2xl mt-6">
                {HALL} {hallNumber}
            </div>
            {rows > 0 && columns > 0 && (
                <SeatArea
                    reservedSeats={reservedSeats}
                    rows={rows}
                    columns={columns}
                    selectedSeats={selectedSeats}
                    setSelectedSeats={setSelectedSeats}
                />
            )}
            <div className="mb-6">
                <TicketType
                    text={`${NORMAL_TICKETS}`}
                    number={ticketNumbers.normal}
                    incrementNumber={incrementNormal}
                    decrementNumber={decrementNormal}
                />
            </div>
            <div className="mb-6">
                <TicketType
                    text={`${REDUCED_TICKETS}`}
                    number={ticketNumbers.reduced}
                    incrementNumber={incrementReduced}
                    decrementNumber={decrementReduced}
                />
            </div>
            {confirmError ? <div className="text-red-500 text-center">{confirmError}</div> : null}
            <div className="text-lg text-white text-center">
                {TOTAL}: {(getPrice() * ticketNumbers.normal + ticketNumbers.reduced * getPrice() * 0.8).toFixed(2)} lei
            </div>
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
