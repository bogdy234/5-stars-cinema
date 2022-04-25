import { FC, ReactElement } from "react";
import CONSTANTS from "../../constants";
import { SeatPosition } from "../../interfaces/seat";
import { Ticket } from "../../interfaces/ticket";

interface ReservationCardProps {
  reservationId: string;
  hallNumber: number;
  movie: string;
  time: string;
  seats: SeatPosition[];
  typesOfTickets: Ticket;
  totalPrice: number;
}

const {
  RESERVATION,
  RESERVATION_ID,
  SEATS,
  HALL,
  NORMAL_TICKETS,
  REDUCED_TICKETS,
  TOTAL_PRICE,
} = CONSTANTS.TEXT.RESERVATION_CARD;

const ReservationCard: FC<ReservationCardProps> = ({
  reservationId,
  hallNumber,
  movie,
  time,
  seats,
  typesOfTickets,
  totalPrice,
}): ReactElement => {
  return (
    <div className="w-full">
      <div className="w-[18rem] sm:w-[25rem] md:w-[31.25rem] h-[20rem] bg-gray-200 flex">
        <div className="w-14 bg-gray-400 h-full flex justify-center items-center">
          <div className="rotate-90 select-none">{RESERVATION}</div>
        </div>
        <div className="m-8 flex flex-col gap-2">
          <div>
            {RESERVATION_ID} <span className="font-bold">{reservationId}</span>
          </div>
          <div>
            {HALL} {hallNumber}
          </div>
          <div className="font-bold">{movie}</div>
          <div>{time}</div>

          <div>
            {SEATS}
            {seats.map((seat, index) => (
              <span key={`${seat.row}/${seat.column}`}>
                {seat.row}/{seat.column}
                {index !== seats.length - 1 && ", "}
              </span>
            ))}
          </div>
          <div>
            {NORMAL_TICKETS} {typesOfTickets.normal}
          </div>
          <div>
            {REDUCED_TICKETS} {typesOfTickets.reduced}
          </div>
          <div>
            {TOTAL_PRICE} {totalPrice} lei
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
