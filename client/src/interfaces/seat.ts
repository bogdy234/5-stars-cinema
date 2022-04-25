export enum SeatStatus {
  Unavailable,
  Available,
  Selected,
}

export interface Seat {
  row: number;
  column: number;
  status: SeatStatus;
}

export interface SeatPosition {
  row: number;
  column: number;
}
