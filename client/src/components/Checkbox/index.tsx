import { FC, ReactElement } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
}): ReactElement => {
  return (
    <div className="flex items-center gap-10">
      <div className="text-xl w-40">{label}</div>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </div>
  );
};

export default Checkbox;
