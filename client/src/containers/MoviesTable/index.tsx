import { FC, ReactElement, useEffect, useState } from "react";
import api from "../../api";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import CONSTANTS from "../../constants";
import { Movie } from "../../interfaces/movies";

interface MoviesTableProps {
  showAddMovieModal: () => void;
  showAddTimeModal: (movieId: string) => void;
  showEditMovieModal: (movie: Movie) => void;
}

const { TITLE, DELETE, EDIT, POSTER, YEAR, ADD_MOVIE, RUNNING_TIME, ADD } =
  CONSTANTS.TEXT.MOVIES_TABLE;

const tdStyle = "border-2 collapse w-40 text-center";

const MoviesTable: FC<MoviesTableProps> = ({
  showAddMovieModal,
  showAddTimeModal,
  showEditMovieModal,
}): ReactElement => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getAllMovies = async () => {
    const response = await api.get("/movie/getAllMovies");
    const json = await response.json();
    setMovies(json);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const onClickAddMovie = () => {
    showAddMovieModal();
  };

  const onClickDeleteMovie = async (id: string) => {
    const response = await api.deleteData(id, "/movie");
    const json = await response.json();
    getAllMovies();
    console.log(json);
  };

  const onClickEditMovie = (movie: Movie) => {
    showEditMovieModal(movie);
  };

  const onClickAddRunningTime = (movieId: string) => {
    showAddTimeModal(movieId);
  };

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
            <td className={tdStyle}>{RUNNING_TIME}</td>
          </tr>
        </thead>
        <tbody className="text-center text-xl border-2 collapse">
          {movies.map((movie) => (
            <tr
              key={`${movie.title}-${movie.productionYear}-${movie.length}`}
              className="border-2 collapse"
            >
              <td className="border-2 collapse">{movie.title}</td>
              <td className="border-2 collapse">
                <Icon src={movie.coverImageUrl} alt="cover" />
              </td>
              <td className="border-2 collapse">{movie.productionYear}</td>
              <td className="border-2 collapse">
                <Button
                  onClick={() => onClickDeleteMovie(movie._id)}
                  text={DELETE}
                  className="bg-red-300 w-24 h-10 rounded text-black"
                />
              </td>
              <td className="border-2 collapse">
                <Button
                  onClick={() => onClickEditMovie(movie)}
                  text={EDIT}
                  className="bg-blue-300 w-24 h-10 rounded text-black"
                />
              </td>
              <td className="border-2 collapse">
                <Button
                  onClick={() => onClickAddRunningTime(movie._id)}
                  text={ADD}
                  className="bg-blue-300 w-24 h-10 rounded text-black"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesTable;
