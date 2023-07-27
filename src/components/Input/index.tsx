import { FC } from "react";
import "./input.scss";

interface InputProps {
  name: string;
  testId: string;
  type: string;
  required?: boolean;
  heading: string;
  autoComplete?: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (value: any) => void;
  min?: string;
  max?: string;
}

export const Input: FC<InputProps> = ({
  heading,
  testId,
  name,
  type,
  required,
  autoComplete,
  value,
  min,
  max,
  onChange = () => {},
}) => {
  return (
    <label className="input">
      <span className="input__heading">{heading}</span>
      <input
        data-test-id={testId}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </label>
  );
};
