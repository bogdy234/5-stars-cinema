import { FC, ReactElement, useRef, useState } from "react";
import Modal from "../../components/Modal";
import CONSTANTS from "../../constants";
import InputError from "../InputError";
import TextArea from "../../components/TextArea";
import useClickOutside from "../../utils/hooks/useClickOutside";
import Checkbox from "../../components/Checkbox";
import { isNumeric } from "../../utils";
import Button from "../../components/Button";
import api from "../../api";
import useShowModal from "../../utils/hooks/useShowModal";
import SuccessModal from "../../components/SuccessModal";

interface AddMovieModalProps {
  showModal: boolean;
  closeModal: () => void;
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
  SUCCESS,
} = CONSTANTS.TEXT.ADD_MOVIE_MODAL;

const AddMovieModal: FC<AddMovieModalProps> = ({
  showModal,
  closeModal,
}): ReactElement => {
  const ref = useRef(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [length, setLength] = useState<string>("0");
  const [actors, setActors] = useState<string>("");
  const [coverImageUrl, setCoverImageUrl] = useState<string>("");
  const [trailerUrl, setTrailerUrl] = useState<string>("");
  const [direction, setDirection] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [producer, setProducer] = useState<string>("");
  const [productionYear, setProductionYear] = useState<string>(
    `${new Date().getFullYear()}`
  );
  const [rating, setRating] = useState<string>("");
  const [is3D, setIs3D] = useState<boolean>(false);
  const [isPremiere, setIsPremiere] = useState<boolean>(false);
  const { showSuccess, toggleSuccess } = useShowModal();

  useClickOutside(ref, closeModal);

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
    };
    const response = await api.post(data, "/movie");
    const json = response.json();
    if (response.status === 201) {
      toggleSuccess();
    }
    console.log(json);
  };

  const onCloseModal = () => {
    toggleSuccess();
  };
  return (
    <Modal showModal={showModal}>
      <div
        className="bg-gray-300 w-2/3 min-h-full mt-10 mb-10 m-auto flex items-center flex-col pb-10 pt-10"
        ref={ref}
      >
        <SuccessModal
          showModal={showSuccess}
          onClose={onCloseModal}
          message={SUCCESS}
        />
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

export default AddMovieModal;
