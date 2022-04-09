import {FC, ReactElement} from 'react';
import {SeatStatus} from "../../interfaces/seat";

interface SeatTileProps{
    seatStatus: SeatStatus;
    seatRow:number;
    seatColumn:number;
}

const SeatTile: FC<SeatTileProps> = ({seatStatus, seatRow, seatColumn}):ReactElement => {
    const getColor = () => {
        if (seatStatus === SeatStatus.Available){
            return 'bg-green-700';
        }
        else if (seatStatus === SeatStatus.Selected){
            return 'bg-red-700';
        }
        else return 'bg-gray-500'
    }

    return (
        <div className={`w-10 h-10 flex justify-center items-center cursor-pointer ${getColor()} ${seatStatus === SeatStatus.Available && 'hover:bg-red-700'}`}>
            {`${seatRow}/${seatColumn}`}
        </div>
    );
};

export default SeatTile;
