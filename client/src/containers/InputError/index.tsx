import React, { FC, ReactElement } from "react";
import TextInput from "../../components/TextInput";
import { error, inputErrorParent, textInput } from "./style";

interface InputErrorProps {
  placeholder?: string;
  value: string;
  onChange: (newValue: string) => void;
  errorText: string;
  labelClassName?: string;
  inputClassName?: string;
  label?: string;
  containerClassName?: string;
  errorInputContainerClassName?: string;
  password?: boolean;
  setMaxWidthSmall?: boolean;
  invertEyeColor?: boolean;
}

const InputError: FC<InputErrorProps> = ({
  placeholder,
  value,
  onChange,
  errorText,
  labelClassName,
  inputClassName,
  label,
  containerClassName,
  errorInputContainerClassName,
  password,
  setMaxWidthSmall,
  invertEyeColor,
}: InputErrorProps): ReactElement => {
  return (
    <div
      className={`${
        errorInputContainerClassName
          ? errorInputContainerClassName
          : inputErrorParent
      }`}
    >
      {errorText && <p className={error}>{errorText}</p>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${textInput} ${containerClassName}`}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        label={label}
        password={password}
        setMaxWidthSmall={setMaxWidthSmall || false}
        invertEyeColor={invertEyeColor}
      />
    </div>
  );
};

export default InputError;
