import React, {FC, ReactElement} from 'react';

interface TextAreaProps {
    placeholder: string;
    value: string;
    label?: string;
    onChange: (newValue: string) => void;
    className?: string;
}

const TextArea: FC<TextAreaProps> = ({placeholder, value, label, onChange, className}: TextAreaProps): ReactElement =>
    (
        <div className={className}>
            <label>
                {label}
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-32 pl-4 pt-2 resize-none"
                />
            </label>
        </div>
    );

export default TextArea;
