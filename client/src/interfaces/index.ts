export enum AdminNavOption {
  Movies = "Filme",
  Reservations = "Rezervari",
}

export interface RunningTime {
  time: Date;
  hallNumber: number;
  id?: string;
}
