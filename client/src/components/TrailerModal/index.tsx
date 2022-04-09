import { FC, ReactElement, useRef } from "react";
import useClickOutside from "../../utils/hooks/useClickOutside";
import Modal from "../Modal";

interface TrailerModalProps {
    showModal: boolean;
    youtubeLink: string;
    toggle: () => void;
}

const TrailerModal: FC<TrailerModalProps> = ({
    showModal,
    youtubeLink,
    toggle,
}): ReactElement => {
    const ref = useRef(null);
    useClickOutside(ref, toggle);
    return (
        <Modal showModal={showModal}>
            <div className="h-screen flex justify-center items-center">
                <iframe
                    ref={ref}
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${youtubeLink.substring(
                        youtubeLink.indexOf("watch?v=") + "watch?v=".length,
                        youtubeLink.length
                    )}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Trailer"
                />
            </div>
        </Modal>
    );
};

export default TrailerModal;
