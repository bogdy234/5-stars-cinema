import { ReactElement } from "react";
import { FC } from "react";
import CONSTANTS from "../../constants";
import Icon from "../Icon";

interface MovieCardProps {
    title: string;
    is3D: boolean;
    genre: string;
    isPremiere: boolean;
    coverImageUrl: string;
    rating: number;
}

const { FORMAT, RATING, GENRE, PREMIERE, THREE_D, NORMAL } =
    CONSTANTS.TEXT.MOVIE_CARD;

const MovieCard: FC<MovieCardProps> = ({
    title,
    is3D,
    genre,
    isPremiere,
    coverImageUrl,
    rating,
}): ReactElement => {
    return (
        <div className="w-[170px] h-[230px] flex">
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
            </div>
        </div>
    );
};

export default MovieCard;
