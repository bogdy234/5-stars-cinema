import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { UserData } from "../../actions/user";
import api from "../../api";
import Button from "../../components/Button";
import ErrorModal from "../../components/ErrorModal";
import ReservationCard from "../../components/ReservationCard";
import SuccessModal from "../../components/SuccessModal";
import CONSTANTS from "../../constants";
import { UserReservation } from "../../interfaces/reservation";
import { formatDate } from "../../utils";
import useShowModal from "../../utils/hooks/useShowModal";

interface MyReservationsProps {
  userData?: {
    data: UserData;
  };
}

const { NO_RESERVATIONS, DELETE } = CONSTANTS.TEXT.MY_RESERVATIONS;

const MyReservations: FC<MyReservationsProps> = ({
  userData,
}): ReactElement => {
  const { showSuccess, showError, toggleSuccess, toggleError } = useShowModal();
  const [userReservations, setUserReservations] = useState<UserReservation[]>();

  const getReservations = useCallback(async () => {
    const response = await api.get(
      `/reservation/getUserReservations?userId=${userData?.data._id}`
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      setUserReservations(jsonResponse);
    }
  }, [userData?.data._id]);

  useEffect(() => {
    if (!userData) {
      return;
    }

    getReservations();
  }, [getReservations, userData]);

  const getDate = (date: Date) => {
    return formatDate(new Date(date), true);
  };

  const onClickDelete = async (id: string) => {
    const response = await api.deleteData(id, `/reservation`);
    if (response.status === 201) {
      toggleSuccess();
      getReservations();
    } else {
      toggleError();
    }
  };

  return (
    <div className="pb-14">
      <SuccessModal
        showModal={showSuccess}
        onClose={toggleSuccess}
        message={CONSTANTS.TEXT.SUCCESS_MODAL.DELETE_RESERVATION_SUCCESS}
      />
      <ErrorModal showModal={showError} onClose={toggleError} />
      {userReservations?.map((reservation) => (
        <React.Fragment key={`my-reservation-${reservation._id}`}>
          <ReservationCard
            hallNumber={reservation.hallNumber}
            movie={reservation.movieName}
            seats={reservation.bookedSeats}
            time={getDate(reservation.movieTiming)}
            typesOfTickets={reservation.ticketsType}
            totalPrice={reservation.totalPrice}
            reservationId={reservation._id}
          />
          <div className="flex-col sm:flex-row flex justify-end gap-10 mt-8 mb-10">
            <Button
              onClick={() => onClickDelete(reservation._id)}
              text={DELETE}
              className={`w-36 h-8 bg-red-400 text-black rounded hover:shadow-lg hover:shadow-red-300/50`}
            />
          </div>
        </React.Fragment>
      ))}
      {!userReservations?.length && (
        <div className="text-white text-2xl">{NO_RESERVATIONS}</div>
      )}
    </div>
  );
};

export default MyReservations;
