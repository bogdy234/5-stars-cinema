import { FC, ReactElement, useState } from "react";
import Icon from "../Icon";

interface TextInputProps {
    placeholder?: string;
    value: string;
    onChange: (newValue: string) => void;
    label?: string;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    password?: boolean;
}

const TextInput: FC<TextInputProps> = ({
    placeholder,
    value,
    onChange,
    label,
    className,
    inputClassName,
    labelClassName,
    password,
}: TextInputProps): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(
        password || false
    );

    const onChangeInputType = () => {
        setShowPassword((a) => !a);
    };

    return (
        <div className={className}>
            <label className={`${labelClassName}`}>
                {label}
                <div className={`flex items-center relative max-w-sm`}>
                    <input
                        type={showPassword ? "password" : "text"}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={`w-full h-10 pl-4 pr-10 ${inputClassName}`}
                    />
                    {password && (
                        <Icon
                            src="eye-solid.svg"
                            alt="eye"
                            className={`w-4 absolute right-0`}
                            onClick={onChangeInputType}
                        />
                    )}
                </div>
            </label>
        </div>
    );
};

export default TextInput;
