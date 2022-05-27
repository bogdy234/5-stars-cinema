import { FC, ReactElement } from "react";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (newValue: string) => void;
}

const Select: FC<SelectProps> = ({
  value,
  onChange,
  options,
}): ReactElement => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option value={option} key={`option-${option}`}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
