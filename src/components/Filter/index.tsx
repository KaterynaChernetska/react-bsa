import { FC, useState } from "react";
import "./filter.scss";
import { SearchInput } from "../SearchInput";
interface TripFilterProps {
  onFilter: (searchTerm: string, duration: string, difficulty: string) => void;
}
export const Filter: FC<TripFilterProps> = ({ onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchQuery(event.target.value);
    onFilter(event.target.value, duration, level);
  };

  const handleDuractionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setDuration(event.target.value);
    onFilter(searchQuery, event.target.value, level);
  };

  const handleLevelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setLevel(event.target.value);
    onFilter(searchQuery, duration, event.target.value);
  };

  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <SearchInput
          value={searchQuery}
          testId="filter-search"
          name="search"
          type="search"
          placeholder="search by title"
          title="Search by name"
          onChange={handleSearchInputChange}
        />
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select
            data-test-id="filter-duration"
            name="duration"
            onChange={handleDuractionChange}
          >
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select
            data-test-id="filter-level"
            name="level"
            onChange={handleLevelChange}
          >
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};
