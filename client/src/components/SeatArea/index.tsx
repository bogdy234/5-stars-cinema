import {FC, ReactElement, useEffect, useState} from 'react';
import CONSTANTS from "../../constants";
import SeatTile from "../SeatTile";
import {SeatStatus} from "../../interfaces/seat";

const {SCREEN, UNAVAILABLE, AVAILABLE, SELECTED} = CONSTANTS.TEXT.SEATS_AREA;

interface SeatAreaProps {
    rows: number;
    columns: number;
}

interface Seat {
    row: number;
    column: number;
    status: SeatStatus;
}

const SeatArea: FC<SeatAreaProps> = ({rows, columns,}): ReactElement => {
    const legendItems = [UNAVAILABLE, AVAILABLE, SELECTED];
    const [seats, setSeats] = useState<Seat[]>([]);
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

    const getColor = (item: string) => {
        if (item === UNAVAILABLE) {
            return 'bg-gray-500';
        } else if (item === AVAILABLE) {
            return 'bg-green-700';
        }
        return 'bg-red-700';
    }

    const getSeats = () => {
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= columns; j++) {
                setSeats(a => [...a, {row: i, column: j, status: SeatStatus.Available}])
            }
        }
    }

    useEffect(() => {
        if (seats.length) {
            return;
        }
        getSeats()
    }, []);

    useEffect(() => {
        const selectedSeats = seats.filter(seat => seat.status === SeatStatus.Selected);
        setSelectedSeats(selectedSeats);
    }, [seats]);


    const onPressSeat = (index: number) => {
        if (seats[index].status === SeatStatus.Unavailable) {
            return;
        }
        const newSeats = [...seats];
        if (newSeats[index].status === SeatStatus.Available) {
            newSeats[index].status = SeatStatus.Selected;
        } else if (newSeats[index].status === SeatStatus.Selected) {
            newSeats[index].status = SeatStatus.Available;
        }
        setSeats(newSeats);
    }

    return (
        <div className={`flex items-center flex-col w-full sm:w-3/4 md:w-1/2 m-auto text-gray-300`}>
            <div>{SCREEN}</div>
            <div className={`h-4 w-full border-b-8 border-gray-400`}></div>
            <div className={`grid grid-cols-${columns} mt-10 w-full justify-items-center gap-y-5`}>
                {seats.map((seat, index) =>
                    <SeatTile key={`${seat.row}-${seat.column}`} seatStatus={seat.status} seatRow={seat.row}
                              seatColumn={seat.column} onPressSeat={() => onPressSeat(index)}/>
                )}
            </div>
            <div className={`flex gap-10 mt-10 flex-col sm:flex-row`}>
                {legendItems.map(item => (
                        <div className={`flex gap-4 items-center`} key={`${item}`}>
                            <div className={`w-8 h-8 ${getColor(item)}`}></div>
                            <div>{item}</div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default SeatArea;
