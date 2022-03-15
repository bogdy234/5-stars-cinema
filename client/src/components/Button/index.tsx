import { FC, ReactElement } from "react";

interface ButtonProps {
    onClick: () => void;
    className?: string;
    text: string;
}

const Button: FC<ButtonProps> = ({
    onClick,
    className,
    text,
}: ButtonProps): ReactElement => {
    return (
        <>
            <button
                type="button"
                className={`${className ? className : "w-40 h-16"} `}
                onClick={onClick}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
