import { FC, ReactElement, useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
import CONSTANTS from "../../constants";
import InputError from "../InputError";
import TextArea from "../../components/TextArea";
import useClickOutside from "../../utils/hooks/useClickOutside";
import Checkbox from "../../components/Checkbox";
import { isNumeric } from "../../utils";
import Button from "../../components/Button";
import api from "../../api";
import { Movie } from "../../interfaces/movies";

interface EditMovieModalProps {
    showModal: boolean;
    closeModal: () => void;
    movie: Movie;
}

const {
    TITLE,
    DESCRIPTION,
    LENGTH,
    ACTORS,
    COVER_IMAGE,
    DIRECTION,
    GENRE,
    PRODUCER,
    PRODUCTION_YEAR,
    RATING,
    IS_3D,
    IS_PREMIERE,
    CONFIRM,
    TRAILER_URL,
} = CONSTANTS.TEXT.EDIT_MOVIE_MODAL;

const EditMovieModal: FC<EditMovieModalProps> = ({
    showModal,
    closeModal,
    movie,
}): ReactElement => {
    const ref = useRef(null);
    const [title, setTitle] = useState<string>(movie.title);
    const [description, setDescription] = useState<string>(movie.description);
    const [length, setLength] = useState<string>(`${movie.length}`);
    const [actors, setActors] = useState<string>(movie.actors);
    const [coverImageUrl, setCoverImageUrl] = useState<string>(
        movie.coverImageUrl
    );
    const [trailerUrl, setTrailerUrl] = useState<string>(movie.trailerUrl);
    const [direction, setDirection] = useState<string>(movie.direction);
    const [genre, setGenre] = useState<string>(movie.genre);
    const [producer, setProducer] = useState<string>(movie.producer);
    const [productionYear, setProductionYear] = useState<string>(
        `${movie.productionYear}`
    );
    const [rating, setRating] = useState<string>(`${movie.rating}`);
    const [is3D, setIs3D] = useState<boolean>(movie.is3D);
    const [isPremiere, setIsPremiere] = useState<boolean>(movie.isPremiere);

    useClickOutside(ref, closeModal);

    useEffect(() => {
        setTitle(movie.title);
        setDescription(movie.description);
        setLength(`${movie.length}`);
        setActors(movie.actors);
        setCoverImageUrl(movie.coverImageUrl);
        setTrailerUrl(movie.trailerUrl);
        setDirection(movie.direction);
        setGenre(movie.genre);
        setProducer(movie.producer);
        setProductionYear(`${movie.productionYear}`);
        setRating(`${movie.rating}`);
        setIs3D(movie.is3D);
        setIsPremiere(movie.isPremiere);
    }, [
        movie.actors,
        movie.coverImageUrl,
        movie.description,
        movie.direction,
        movie.genre,
        movie.is3D,
        movie.isPremiere,
        movie.length,
        movie.producer,
        movie.productionYear,
        movie.rating,
        movie.title,
        movie.trailerUrl,
    ]);

    const onChangeTitle = (newValue: string) => {
        setTitle(newValue);
    };

    const onChangeDescription = (newValue: string) => {
        setDescription(newValue);
    };

    const onChangeLegth = (newValue: string) => {
        if (!isNumeric(newValue) && newValue !== "") {
            return;
        }
        setLength(newValue);
    };

    const onChangeActors = (newValue: string) => {
        setActors(newValue);
    };

    const onChangeDirection = (newValue: string) => {
        setDirection(newValue);
    };

    const onChangeGenre = (newValue: string) => {
        setGenre(newValue);
    };

    const onChangeProducer = (newValue: string) => {
        setProducer(newValue);
    };

    const onChangeProductionYear = (newValue: string) => {
        if (!isNumeric(newValue) && newValue !== "") {
            return;
        }
        setProductionYear(newValue);
    };

    const onChangeRating = (newValue: string) => {
        setRating(newValue);
    };

    const onChangeCoverImageUrl = (newValue: string) => {
        setCoverImageUrl(newValue);
    };

    const onChangeTrailer = (newValue: string) => {
        setTrailerUrl(newValue);
    };

    const onClickConfirm = async () => {
        const data = {
            id: movie._id,
            updatedValue: {
                title,
                description,
                length,
                coverImageUrl,
                trailerUrl,
                rating: parseInt(rating, 10),
                genre,
                productionYear: parseInt(productionYear, 10),
                producer,
                direction,
                actors,
                is3D,
                isPremiere,
            },
        };
        const response = await api.put(data, "/movie");
        const json = await response.json();
        console.log(json);
    };

    return (
        <Modal showModal={showModal}>
            <div
                className="bg-gray-300 w-2/3 min-h-full mt-10 mb-10 m-auto flex items-center flex-col pb-10 pt-10"
                ref={ref}
            >
                <InputError
                    value={title}
                    onChange={onChangeTitle}
                    errorText={""}
                    label={TITLE}
                    errorInputContainerClassName="w-1/2"
                />
                <TextArea
                    placeholder={""}
                    value={description}
                    onChange={onChangeDescription}
                    label={DESCRIPTION}
                    className="w-1/2"
                />
                <InputError
                    value={length}
                    onChange={onChangeLegth}
                    errorText={""}
                    label={LENGTH}
                    errorInputContainerClassName="w-1/2"
                />
                <InputError
                    value={coverImageUrl}
                    onChange={onChangeCoverImageUrl}
                    errorText={""}
                    label={COVER_IMAGE}
                    errorInputContainerClassName="w-1/2"
                />
                <InputError
                    value={trailerUrl}
                    onChange={onChangeTrailer}
                    errorText={""}
                    label={TRAILER_URL}
                    errorInputContainerClassName="w-1/2"
                />
                <InputError
                    value={actors}
                    onChange={onChangeActors}
                    errorText={""}
                    label={ACTORS}
                    errorInputContainerClassName="w-1/2"
                />
                <InputError
                    value={direction}
                    onChange={onChangeDirection}
                    errorText={""}
                    label={DIRECTION}
                    errorInputContainerClassName="w-1/2"
                />
                <InputError
                    value={producer}
                    onChange={onChangeProducer}
                    errorText={""}
                    label={PRODUCER}
                    errorInputContainerClassName="w-1/2"
                />
                <InputError
                    value={productionYear}
                    onChange={onChangeProductionYear}
                    errorText={""}
                    label={PRODUCTION_YEAR}
                    errorInputContainerClassName="w-1/2"
                />
                <InputError
                    value={genre}
                    onChange={onChangeGenre}
                    errorText={""}
                    label={GENRE}
                    errorInputContainerClassName="w-1/2"
                />
                <InputError
                    value={rating}
                    onChange={onChangeRating}
                    errorText={""}
                    label={RATING}
                    errorInputContainerClassName="w-1/2"
                />
                <Checkbox
                    checked={is3D}
                    onChange={() => setIs3D(!is3D)}
                    label={IS_3D}
                />
                <Checkbox
                    checked={isPremiere}
                    onChange={() => setIsPremiere(!isPremiere)}
                    label={IS_PREMIERE}
                />
                <Button
                    onClick={onClickConfirm}
                    text={CONFIRM}
                    className={`w-36 h-8 mt-8 bg-[#03e9f4] text-black rounded hover:shadow-lg hover:shadow-cyan-300/50`}
                />
            </div>
        </Modal>
    );
};

export default EditMovieModal;
