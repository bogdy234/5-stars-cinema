import { FC, ReactElement, useEffect, useState } from "react";
import api from "../../api";
import Button from "../../components/Button";
import CONSTANTS from "../../constants";
import { Movie } from "../../interfaces/movies";

interface MoviesTableProps {}

const { TITLE, DELETE, EDIT, POSTER, YEAR, ADD_MOVIE } =
    CONSTANTS.TEXT.MOVIES_TABLE;

const tdStyle = "border-2 collapse w-40 text-center";

const MoviesTable: FC<MoviesTableProps> = (): ReactElement => {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        const getAllMovies = async () => {
            const response = await api.get("/movie/getAllMovies");
            const json = await response.json();
            setMovies(json);
        };
        getAllMovies();
    }, []);

    const onClickAddMovie = () => {};

    return (
        <div className="mt-20 text-white">
            <div className="mb-20">
                <Button
                    onClick={onClickAddMovie}
                    text={ADD_MOVIE}
                    className={`w-36 h-8 mt-8 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
                />
            </div>
            <table>
                <thead>
                    <tr className="border-2 collapse text-3xl">
                        <td className={tdStyle}>{TITLE}</td>
                        <td className={tdStyle}>{POSTER}</td>
                        <td className={tdStyle}>{YEAR}</td>
                        <td className={tdStyle}>{DELETE}</td>
                        <td className={tdStyle}>{EDIT}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>s</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MoviesTable;
