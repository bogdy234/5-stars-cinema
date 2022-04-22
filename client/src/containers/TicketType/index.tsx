import { FC, ReactElement } from "react";
import Button from "../../components/Button";

interface TicketTypeProps {
  text: string;
  number: number;
  incrementNumber: () => void;
  decrementNumber: () => void;
}

const TicketType: FC<TicketTypeProps> = ({
  text,
  number,
  decrementNumber,
  incrementNumber,
}): ReactElement => {
  return (
    <div className="flex justify-center items-center text-gray-100 text-lg">
      <div className="mr-20 w-60">{text}</div>
      <div className="flex items-center gap-4">
        <Button
          onClick={decrementNumber}
          text={"-"}
          className="w-8 h-8 bg-[#03e9f4] text-black"
        />
        <div>{number}</div>
        <Button
          onClick={incrementNumber}
          text={"+"}
          className="w-8 h-8 bg-[#03e9f4] text-black"
        />
      </div>
    </div>
  );
};

export default TicketType;
