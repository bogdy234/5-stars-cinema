import { FC, ReactElement } from "react";

interface IconProps {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
}

const Icon: FC<IconProps> = ({
    src,
    alt,
    className,
    onClick,
}: IconProps): ReactElement => {

    return (
        <img
            src={src}
            alt={alt}
            className={`${className} w-full h-full ${
                onClick && "cursor-pointer"
            }`}
            onClick={onClick}
        />
    );
};

export default Icon;
