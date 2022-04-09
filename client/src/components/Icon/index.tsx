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
        <div className={`${className}`}>
            <img
                src={src}
                alt={alt}
                className={`w-full h-full ${onClick && "cursor-pointer"}`}
                onClick={onClick}
            />
        </div>
    );
};

export default Icon;
