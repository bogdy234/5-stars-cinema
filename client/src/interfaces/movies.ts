export interface Movie {
    _id: string;
    title: string;
    description: string;
    length: number;
    isRunning: boolean;
    coverImageUrl: string;
    trailerUrl: string;
    rating: number;
    genre: string;
    productionYear: number;
    producer: string;
    direction: string;
    actors: string;
    is3D: boolean;
    isPremiere: boolean;
    runningTimes: { time: Date; hallId: string }[];
}
