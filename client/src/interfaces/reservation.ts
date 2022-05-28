import { SeatPosition } from "./seat";
import { Ticket } from "./ticket";

export interface UserReservation {
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
