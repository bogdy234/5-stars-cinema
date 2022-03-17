import { ReactElement, useState } from "react";
import { FC } from "react";
import CONSTANTS from "../../constants";
import Button from "../Button";
import Icon from "../Icon";

interface MovieCardProps {
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
    title,
    is3D,
    genre,
    isPremiere,
    coverImageUrl,
    rating,
    trailerUrl,
}): ReactElement => {
    const [showTrailer, setShowTrailer] = useState<boolean>(false);
    const onClickTrailer = () => {
        // window.location.href = trailerUrl;
        setShowTrailer(true);
    };

    return (
        <div className="w-[170px] h-[230px] flex">
            {showTrailer && (
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/mqqft2x_Aa4`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            )}
            <Icon
                src={coverImageUrl}
                alt="movie-cover"
                className="w-full h-full object-cover"
            />
            <div className={`pl-4 bg-gray-300 min-w-[170px] pr-4`}>
                <div className="font-medium mt-2">{title}</div>
                {isPremiere && (
                    <div className="flex items-center mb-4">
                        <Icon
                            src="/p-solid.svg"
                            alt="premiere-icon"
                            className="w-4 h-4 bg-blue-500 mr-2"
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
                    <Button
                        text={TRAILER}
                        onClick={onClickTrailer}
                        className={`w-20 h-8 bg-red-300 rounded-md`}
                        leftIconSrc="/youtube-brands.svg"
                        leftIconAlt="trailer-icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
