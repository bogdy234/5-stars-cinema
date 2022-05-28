import React, { FC, ReactElement, useState } from "react";
import api from "../../api";
import Button from "../../components/Button";
import ErrorModal from "../../components/ErrorModal";
import ReservationCard from "../../components/ReservationCard";
import Select from "../../components/Select";
import SuccessModal from "../../components/SuccessModal";
import CONSTANTS from "../../constants";
import { UserReservation } from "../../interfaces/reservation";
import { formatDate } from "../../utils";
import useShowModal from "../../utils/hooks/useShowModal";
import InputError from "../InputError";

interface AdminReservationsProps {}

const {
  RESERVATION_ID,
  SEARCH,
  ID_ERROR,
  DELETE,
  NOT_FOUND,
  EDIT,
  FIRST_NAME,
  LAST_NAME,
  OPTIONS,
} = CONSTANTS.TEXT.ADMIN_RESERVATIONS;

const AdminReservations: FC<AdminReservationsProps> = (): ReactElement => {
  const [option, setOption] = useState<string>(OPTIONS[0]);
  const [reservationId, setReservationId] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [idError, setIdError] = useState<string>("");
  const [reservations, setReservations] = useState<UserReservation[] | null>(
    null
  );
  const [showFound, setShowFound] = useState<boolean>(false);
  const { showSuccess, showError, toggleSuccess, toggleError } = useShowModal();

  const onChangeReservationId = (newValue: string) => {
    setIdError("");
    setReservationId(newValue);
  };

  const onClickSearch = async () => {
    let response;
    let json;
    if (option === OPTIONS[0]) {
      response = await api.get(
        `/reservation/findByName?firstName=${firstName.trim()}&lastName=${lastName.trim()}`
      );
      json = await response.json();
    } else if (option === OPTIONS[1]) {
      if (reservationId.length !== 24) {
        setIdError(ID_ERROR);
        return;
      }
      response = await api.get(`/reservation?id=${reservationId}`);
      json = await response.json();
    }
    if (!json.length) {
      setShowFound(true);
      setReservations(null);
      return;
    }
    setShowFound(false);
    setReservations([...json]);
  };

  const getDate = (date: Date) => {
    return formatDate(new Date(date), true);
  };

  const onClickDelete = async (id: string) => {
    if (!reservations?.length) {
      return;
    }
    const response = await api.deleteData(id, `/reservation`);
    if (response.status === 201) {
      toggleSuccess();
    } else if (response.status === 400) {
      toggleError();
    }
  };

  const onClickEdit = (reservation: UserReservation) => {};

  const onChangeOption = (newValue: string) => {
    setOption(newValue);
  };

  const onChangeFirstName = (newValue: string) => {
    setFirstName(newValue);
  };

  const onChangeLastName = (newValue: string) => {
    setLastName(newValue);
  };

  return (
    <div className="mt-20 w-full flex flex-col items-center pb-20">
      <SuccessModal
        showModal={showSuccess}
        onClose={toggleSuccess}
        message={CONSTANTS.TEXT.SUCCESS_MODAL.DELETE_RESERVATION_SUCCESS}
      />
      <ErrorModal showModal={showError} onClose={toggleError} />
      <div className="mb-6">
        <Select options={OPTIONS} value={option} onChange={onChangeOption} />
      </div>
      <div className="flex justify-center flex-col items-center w-1/2">
        {option === OPTIONS[0] ? (
          <>
            <p className="text-white">{FIRST_NAME}</p>
            <InputError
              value={firstName}
              onChange={onChangeFirstName}
              errorText=""
              inputClassName="text-black rounded-lg w-full"
              errorInputContainerClassName="w-full md:w-1/2"
            />
            <p className="text-white">{LAST_NAME}</p>
            <InputError
              value={lastName}
              onChange={onChangeLastName}
              errorText=""
              inputClassName="text-black rounded-lg w-full"
              errorInputContainerClassName="w-full md:w-1/2"
            />
          </>
        ) : (
          <>
            <p className="text-white">{RESERVATION_ID}</p>
            <InputError
              value={reservationId}
              onChange={onChangeReservationId}
              errorText={idError}
              inputClassName="text-black rounded-lg w-full"
              errorInputContainerClassName="w-full md:w-1/2"
            />
          </>
        )}
        <Button
          onClick={onClickSearch}
          text={SEARCH}
          className={`w-36 h-8 mt-4 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
        />
      </div>
      {showFound && <p className="bg-red-400 mt-4">{NOT_FOUND}</p>}
      {reservations?.length &&
        reservations.map((reservation) => (
          <React.Fragment key={`reservation-${reservation._id}`}>
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
                onClick={() => onClickEdit(reservation)}
                text={EDIT}
                className={`w-36 h-8 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
              />
              <Button
                onClick={() => onClickDelete(reservation._id)}
                text={DELETE}
                className={`w-36 h-8 bg-red-400 text-black rounded hover:shadow-lg hover:shadow-red-300/50`}
              />
            </div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default AdminReservations;
