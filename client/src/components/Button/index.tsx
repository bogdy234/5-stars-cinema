import { FC, ReactElement } from "react";
import Icon from "../Icon";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  text: string;
  leftIconSrc?: string;
  leftIconAlt?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  text,
  leftIconSrc,
  leftIconAlt,
}: ButtonProps): ReactElement => {
  return (
    <>
      <button
        type="button"
        className={`${className ? className : "w-40 h-16"} ${
          leftIconSrc && `flex items-center justify-center gap-1`
        }`}
        onClick={onClick}
      >
        {leftIconSrc && leftIconAlt && (
          <div className="w-4 h-4">
            <Icon src={leftIconSrc} alt={leftIconAlt} />
          </div>
        )}
        {text}
      </button>
    </>
  );
};

export default Button;
