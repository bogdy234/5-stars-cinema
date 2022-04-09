import { useEffect, useState } from "react";
import { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import TrailerModal from "../../components/TrailerModal";
import CONSTANTS from "../../constants";
import NavbarContainer from "../../containers/Navbar/container";
import { MovieInterface } from "../../interfaces/user";
import { formatMinutes } from "../../utils";

interface MovieProps {}

const {
    PREMIERE,
    TITLE,
    PRODUCTION_YEAR,
    GENRE,
    ACTORS,
    FORMAT,
    DIRECTION,
    TRAILER,
    RESERVE,
} = CONSTANTS.TEXT.MOVIE_PAGE;

const Movie: FC<MovieProps> = (): ReactElement => {
    const [showTrailer, setShowTrailer] = useState<boolean>(false);
    const [movie, setMovie] = useState<MovieInterface | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const getMovieData = async () => {
            const movieData = await api.get(`/movie?id=${id}`);
            const movieJsonData = await movieData.json();
            setMovie(movieJsonData[0]);
        };
        getMovieData();
    }, [id]);

    const toggleTrailerModal = () => {
        setShowTrailer((a) => !a);
    };

    const onClickReserve = () => {
        console.log("do sth");
    };

    return (
        <div className="text-white">
            <NavbarContainer />
            {showTrailer && movie && movie?.trailerUrl && (
                <TrailerModal
                    showModal={showTrailer}
                    youtubeLink={movie?.trailerUrl}
                    toggle={toggleTrailerModal}
                />
            )}
            {movie && (
                <div className="md:px-20 lg:px-60 py-10">
                    <div className="mb-10 text-3xl">{movie.title}</div>
                    <div className={`flex gap-10`}>
                        <Icon
                            src={movie.coverImageUrl}
                            alt="cover-image-url"
                            className="w-60 border-2 border-blue-300"
                        />
                        <div>
                            {movie.isPremiere && (
                                <div className="flex items-center">
                                    <Icon
                                        src="/p-solid.svg"
                                        alt="premiere-icon"
                                        className="bg-blue-500 w-6 h-6 mr-1 border-2 border-blue-300"
                                    />
                                    <div>{PREMIERE}</div>
                                </div>
                            )}
                            <div className="flex flex-col gap-10">
                                <div>
                                    {TITLE}: {movie.title}
                                </div>
                                <div>
                                    {DIRECTION}: {movie.direction}
                                </div>
                                <div>
                                    {ACTORS}: {movie.actors}
                                </div>
                                <div>
                                    {GENRE}: {movie.genre}
                                </div>
                                <div>
                                    {FORMAT}: {movie.is3D ? "3D" : "Normal"}
                                </div>
                                <div>
                                    {PRODUCTION_YEAR}: {movie.productionYear}
                                </div>
                            </div>
                            <Button
                                onClick={onClickReserve}
                                text={RESERVE}
                                className={`w-36 h-8 mt-8 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mt-6">
                        <Icon
                            src={"/clock-solid.svg"}
                            alt="clock-icon"
                            className="w-4 h-4 mr-2 items-center"
                        />
                        <div>{formatMinutes(movie.length)}</div>
                        {movie.trailerUrl && (
                            <Button
                                text={TRAILER}
                                onClick={toggleTrailerModal}
                                className={`w-20 h-8 bg-red-300 rounded-md ml-6 text-black`}
                                leftIconSrc="/youtube-brands.svg"
                                leftIconAlt="trailer-icon"
                            />
                        )}
                    </div>
                    <div className="mt-10 border-b-2"></div>
                    <div className="mt-6 text-xl">{movie.description}</div>
                </div>
            )}
        </div>
    );
};

export default Movie;
