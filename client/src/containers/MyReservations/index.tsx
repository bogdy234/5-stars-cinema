import { FC, ReactElement, useEffect, useState } from "react";
import { UserData } from "../../actions/user";
import api from "../../api";
import ReservationCard from "../../components/ReservationCard";
import CONSTANTS from "../../constants";
import { SeatPosition } from "../../interfaces/seat";
import { Ticket } from "../../interfaces/ticket";
import { formatDate } from "../../utils";

interface MyReservationsProps {
  userData?: {
    data: UserData;
  };
}

interface UserReservation {
  _id: string;
  bookedSeats: SeatPosition[];
  movieId: string;
  hallId: string;
  movieTiming: Date;
  ticketsType: Ticket;
  hallNumber: number;
  movieName: string;
  totalPrice: number;
}

const { NO_RESERVATIONS } = CONSTANTS.TEXT.MY_RESERVATIONS;

const MyReservations: FC<MyReservationsProps> = ({
  userData,
}): ReactElement => {
  const [userReservations, setUserReservations] = useState<UserReservation[]>();

  useEffect(() => {
    if (!userData) {
      return;
    }
    const getReservations = async () => {
      const response = await api.get(
        `/reservation/getUserReservations?userId=${userData?.data._id}`
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        setUserReservations(jsonResponse);
      }
    };
    getReservations();
  }, [userData]);

  const getDate = (date: Date) => {
    return formatDate(new Date(date), true);
  };

  return (
    <div className="pb-14">
      {userReservations?.map((reservation) => (
        <ReservationCard
          hallNumber={reservation.hallNumber}
          movie={reservation.movieName}
          seats={reservation.bookedSeats}
          time={getDate(reservation.movieTiming)}
          typesOfTickets={reservation.ticketsType}
          totalPrice={reservation.totalPrice}
          reservationId={reservation._id}
          key={reservation._id}
        />
      ))}
      {!userReservations?.length && (
        <div className="text-white text-2xl">{NO_RESERVATIONS}</div>
      )}
    </div>
  );
};

export default MyReservations;
