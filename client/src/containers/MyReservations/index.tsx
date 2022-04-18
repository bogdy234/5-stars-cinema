import { FC, ReactElement, useEffect, useState } from "react";
import { UserData } from "../../actions/user";
import api from "../../api";

interface MyReservationsProps {
  userData?: {
    data: UserData;
  };
}

const MyReservations: FC<MyReservationsProps> = ({
  userData,
}): ReactElement => {
  const [userReservations, setUserReservations] = useState();

  useEffect(() => {
    if (!userData) {
      return;
    }
    const getReservations = async () => {
      console.log(userData?.data._id);
      const response = await api.get(
        `/reservation/getUserReservations?userId=${userData?.data._id}`
      );
      if (response.ok) {
        console.log(response);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setUserReservations(jsonResponse);
      }
    };
    getReservations();
  }, [userData]);

  console.log(userReservations);

  return (
    <div>
      <div>s</div>
    </div>
  );
};

export default MyReservations;
