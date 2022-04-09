import {FC, ReactElement} from 'react';
import {SeatStatus} from "../../interfaces/seat";

interface SeatTileProps {
    seatStatus: SeatStatus;
    seatRow: number;
    seatColumn: number;
    onPressSeat: () => void;
}

const SeatTile: FC<SeatTileProps> = ({seatStatus, seatRow, seatColumn, onPressSeat}): ReactElement => {
    const getColor = () => {
        if (seatStatus === SeatStatus.Available) {
            return 'bg-green-700';
        } else if (seatStatus === SeatStatus.Selected) {
            return 'bg-red-700';
        } else return 'bg-gray-500'
    }

    return (
        <div
            onClick={onPressSeat}
            className={`w-8 h-8 text-xs sm: text-base sm:w-10 h-10 flex justify-center items-center ${seatStatus !== SeatStatus.Unavailable && 'cursor-pointer'} ${getColor()} ${seatStatus === SeatStatus.Available && 'hover:bg-red-700'}`}>
            {`${seatRow}/${seatColumn}`}
        </div>
    );
};

export default SeatTile;
