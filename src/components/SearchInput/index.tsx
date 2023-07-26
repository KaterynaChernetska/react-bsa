import { FC } from "react";
import "./searchInput.scss";

interface SearchInputProps {
  title: string;
  name: string;
  placeholder: string;
  testId: string;
  type: string;
  value: string;
  onChange: (e: any) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  value,
  title,
  name,
  placeholder,
  testId,
  type,
  onChange,
}) => {
  return (
    <label className="trips-filter__search input">
      <span className="visually-hidden">{title}</span>
      <input
        value={value}
        data-test-id={testId}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};
