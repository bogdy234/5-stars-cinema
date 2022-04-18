import { FC, ReactElement, useCallback, useEffect, useState } from "react";
import CONSTANTS from "../../constants";
import SeatTile from "../SeatTile";
import { Seat, SeatStatus } from "../../interfaces/seat";

const { SCREEN, UNAVAILABLE, AVAILABLE, SELECTED, SELECTED_SEATS, MAX_SEATS } =
  CONSTANTS.TEXT.SEATS_AREA;

interface SeatAreaProps {
  rows: number;
  columns: number;
  selectedSeats: Seat[];
  setSelectedSeats: (a: Seat[]) => void;
  reservedSeats: Seat[];
}

const SeatArea: FC<SeatAreaProps> = ({
  reservedSeats,
  rows,
  columns,
  selectedSeats,
  setSelectedSeats,
}): ReactElement => {
  const legendItems = [UNAVAILABLE, AVAILABLE, SELECTED];
  const [seats, setSeats] = useState<Seat[]>([]);

  console.log(columns);
  const getColor = (item: string) => {
    if (item === UNAVAILABLE) {
      return "bg-gray-500";
    } else if (item === AVAILABLE) {
      return "bg-green-700";
    }
    return "bg-red-700";
  };

  const getSeats = useCallback(() => {
    const newSeats = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        const isSeatReserved =
          reservedSeats.filter((seat) => seat.row === i && seat.column === j)
            .length > 0;
        newSeats.push({
          row: i,
          column: j,
          status: isSeatReserved
            ? SeatStatus.Unavailable
            : SeatStatus.Available,
        });
      }
    }
    setSeats(newSeats);
  }, [columns, rows, reservedSeats]);

  useEffect(() => {
    getSeats();
  }, [getSeats, reservedSeats, reservedSeats.length, seats.length]);

  useEffect(() => {
    if (!setSelectedSeats) {
      return;
    }
    const selectedSeats = seats.filter(
      (seat) => seat.status === SeatStatus.Selected
    );
    setSelectedSeats(selectedSeats);
  }, [seats, setSelectedSeats]);

  const onPressSeat = (index: number) => {
    if (seats[index].status === SeatStatus.Unavailable) {
      return;
    }
    const newSeats = [...seats];
    if (
      newSeats[index].status === SeatStatus.Available &&
      selectedSeats.length < 5
    ) {
      newSeats[index].status = SeatStatus.Selected;
    } else if (newSeats[index].status === SeatStatus.Selected) {
      newSeats[index].status = SeatStatus.Available;
    }
    setSeats(newSeats);
  };

  return (
    <div
      className={`flex items-center flex-col w-full sm:w-3/4 md:w-1/2 m-auto text-gray-300 mt-10 mb-10`}
    >
      <div>{SCREEN}</div>
      <div className={`h-4 w-full border-b-8 border-gray-400`}></div>
      <div
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        className={`grid mt-10 w-full justify-items-center gap-y-5`}
      >
        {seats.map((seat, index) => (
          <SeatTile
            key={`${seat.row}-${seat.column}`}
            seatStatus={seat.status}
            seatRow={seat.row}
            seatColumn={seat.column}
            onPressSeat={() => onPressSeat(index)}
          />
        ))}
      </div>
      <div className={`flex gap-10 mt-10 flex-col sm:flex-row`}>
        {legendItems.map((item) => (
          <div className={`flex gap-4 items-center`} key={`${item}`}>
            <div className={`w-8 h-8 ${getColor(item)}`}></div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      {selectedSeats.length > 0 && (
        <div className={"self-start mt-10"}>
          {SELECTED_SEATS}
          {selectedSeats.map((seat, index) => (
            <span key={`${seat.row}-${seat.column}`}>
              {" "}
              {seat.row}/{seat.column}
              {index !== selectedSeats.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      )}
      <div
        className={`self-start ${selectedSeats.length > 0 ? "mt-5" : "mt-10"}`}
      >
        {MAX_SEATS}
      </div>
    </div>
  );
};

export default SeatArea;
