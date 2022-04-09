import { FC, ReactElement, useEffect, useState } from "react";
import api from "../../api";
import MovieCard from "../../components/MovieCard";
import { MovieInterface } from "../../interfaces/user";

interface MoviesAreaProps {}

const MoviesArea: FC<MoviesAreaProps> = (): ReactElement => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const data = await api.get("/movie/getAllMovies");
            const jsonData = await data.json();
            setMovies(jsonData);
        };
        getMovies();
    }, []);

    return (
        <div className={`w-5/6 mx-auto mt-20 mb-20`}>
            <div
                className={`flex items-center flex-col md:gap-x-14 lg:gap-x-0 md:grid md:grid-cols-2 gap-y-10`}
            >
                {movies &&
                    movies.map((movie: MovieInterface, index: number) => (
                        <MovieCard
                            key={`${movie._id}-${movie.title}`}
                            id={movie._id}
                            title={movie.title}
                            is3D={movie.is3D}
                            isPremiere={movie.isPremiere}
                            rating={movie.rating}
                            genre={movie.genre}
                            trailerUrl={movie.trailerUrl}
                            coverImageUrl={movie.coverImageUrl}
                        />
                    ))}
            </div>
        </div>
    );
};

export default MoviesArea;
