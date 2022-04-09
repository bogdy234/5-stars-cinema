import {FC, ReactElement} from "react";

interface DropdownProps {
    show: boolean;
    options: string[];
    onClickOption: (option: string) => void;
}

const Dropdown: FC<DropdownProps> = ({show, options, onClickOption}): ReactElement => {
    return (
        <div
            id="dropdown"
            className={`${
                show ? "" : "hidden"
            } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-0`}
        >
            <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
            >
                {options && options.map(option => <li key={option}>
                    <div
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => onClickOption(option)}
                    >
                        {option}
                    </div>
                </li>)}
            </ul>
        </div>
    );
};

export default Dropdown;
