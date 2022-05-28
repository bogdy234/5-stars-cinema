import { FC, ReactElement, useState } from "react";
import api from "../../api";
import Button from "../../components/Button";
import ErrorModal from "../../components/ErrorModal";
import ReservationCard from "../../components/ReservationCard";
import SuccessModal from "../../components/SuccessModal";
import CONSTANTS from "../../constants";
import { UserReservation } from "../../interfaces/reservation";
import { formatDate } from "../../utils";
import useShowModal from "../../utils/hooks/useShowModal";
import InputError from "../InputError";

interface AdminReservationsProps {}

const { RESERVATION_ID, SEARCH, ID_ERROR, DELETE, NOT_FOUND, EDIT } =
  CONSTANTS.TEXT.ADMIN_RESERVATIONS;

const AdminReservations: FC<AdminReservationsProps> = (): ReactElement => {
  const [reservationId, setReservationId] = useState<string>("");
  const [idError, setIdError] = useState<string>("");
  const [reservation, setReservation] = useState<UserReservation | null>(null);
  const [showFound, setShowFound] = useState<boolean>(false);
  const { showSuccess, showError, toggleSuccess, toggleError } = useShowModal();

  const onChangeReservationId = (newValue: string) => {
    setIdError("");
    setReservationId(newValue);
  };

  const onClickSearch = async () => {
    if (reservationId.length !== 24) {
      setIdError(ID_ERROR);
      return;
    }
    const response = await api.get(`/reservation?id=${reservationId}`);
    const json = await response.json();
    if (!json.length) {
      setShowFound(true);
      setReservation(null);
      return;
    }
    setReservation(json[0]);
  };

  const getDate = (date: Date) => {
    return formatDate(new Date(date), true);
  };

  const onClickDelete = async () => {
    if (!reservation) {
      return;
    }
    const response = await api.deleteData(reservation._id, `/reservation`);
    if (response.status === 201) {
      toggleSuccess();
    } else if (response.status === 400) {
      toggleError();
    }
  };

  const onClickEdit = () => {};

  return (
    <div className="mt-20 w-full flex flex-col items-center">
      <SuccessModal
        showModal={showSuccess}
        onClose={toggleSuccess}
        message={CONSTANTS.TEXT.SUCCESS_MODAL.CONTACT_MESSAGE}
      />
      <ErrorModal showModal={showError} onClose={toggleError} />
      <div className="flex justify-center flex-col items-center w-1/2">
        <p className="text-white">{RESERVATION_ID}</p>
        <InputError
          value={reservationId}
          onChange={onChangeReservationId}
          errorText={idError}
          inputClassName="text-black rounded-lg w-full"
          errorInputContainerClassName="w-full md:w-1/2"
        />
        <Button
          onClick={onClickSearch}
          text={SEARCH}
          className={`w-36 h-8 mt-4 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
        />
      </div>
      {showFound && <p className="bg-red-400 mt-4">{NOT_FOUND}</p>}
      {reservation && (
        <>
          <div className="text-black mt-20">
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
          </div>
          <div className="flex-col sm:flex-row flex gap-10 mt-8">
            <Button
              onClick={onClickEdit}
              text={EDIT}
              className={`w-36 h-8 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
            />
            <Button
              onClick={onClickDelete}
              text={DELETE}
              className={`w-36 h-8 bg-red-400 text-black rounded hover:shadow-lg hover:shadow-red-300/50`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminReservations;
