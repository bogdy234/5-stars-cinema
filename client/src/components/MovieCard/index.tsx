import { ReactElement, useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../constants";
import Button from "../Button";
import Icon from "../Icon";
import TrailerModal from "../TrailerModal";

interface MovieCardProps {
    id: string;
    title: string;
    is3D: boolean;
    genre: string;
    isPremiere: boolean;
    coverImageUrl: string;
    rating: number;
    trailerUrl: string;
}

const { FORMAT, RATING, GENRE, PREMIERE, THREE_D, NORMAL, TRAILER } =
    CONSTANTS.TEXT.MOVIE_CARD;

const MovieCard: FC<MovieCardProps> = ({
    id,
    title,
    is3D,
    genre,
    isPremiere,
    coverImageUrl,
    rating,
    trailerUrl,
}): ReactElement => {
    const navigate = useNavigate();
    const [showTrailer, setShowTrailer] = useState<boolean>(false);
    const onClickTrailer = () => {
        // window.location.href = trailerUrl;
        setShowTrailer(true);
    };

    const toggleTrailerModal = () => {
        setShowTrailer((a) => !a);
    };

    const onClickCoverPhoto = () => {
        navigate(`/movie/${id}`);
    };

    return (
        <div
            className={`w-[400px] h-[230px] flex justify-self-center ${
                !showTrailer ? "md:hover:scale-105 transition-hover" : ""
            }`}
        >
            {showTrailer && trailerUrl && (
                <TrailerModal
                    showModal={showTrailer}
                    youtubeLink={trailerUrl}
                    toggle={toggleTrailerModal}
                />
            )}
            <Icon
                src={coverImageUrl}
                alt="movie-cover"
                className="w-full h-full object-cover md:hover:opacity-70 transition-all"
                onClick={onClickCoverPhoto}
            />
            <div className={`pl-4 bg-gray-300 min-w-[200px] pr-4`}>
                <div className="font-medium mt-2">{title}</div>
                {isPremiere && (
                    <div className="flex items-center">
                        <Icon
                            src="/p-solid.svg"
                            alt="premiere-icon"
                            className="bg-blue-500 w-6 h-6 mr-1 border-2 border-blue-300"
                        />
                        <div>{PREMIERE}</div>
                    </div>
                )}
                <div>
                    {FORMAT}: {is3D ? THREE_D : NORMAL}
                </div>
                <div>
                    {RATING}: {rating}/10
                </div>
                <div>
                    {GENRE}: {genre}
                </div>
                <div className="flex justify-center mt-2">
                    {trailerUrl && (
                        <Button
                            text={TRAILER}
                            onClick={onClickTrailer}
                            className={`w-20 h-8 bg-red-300 rounded-md mt-4`}
                            leftIconSrc="/youtube-brands.svg"
                            leftIconAlt="trailer-icon"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
