import { FC, ReactElement } from "react";
import Icon from "../Icon";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  text: string;
  leftIconSrc?: string;
  leftIconAlt?: string;
  children?: ReactElement;
}

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  text,
  leftIconSrc,
  leftIconAlt,
  children,
}: ButtonProps): ReactElement => {
  return (
    <>
      <button
        type="button"
        className={`relative ${className ? className : "w-40 h-16"} ${
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
        {children}
      </button>
    </>
  );
};

export default Button;
