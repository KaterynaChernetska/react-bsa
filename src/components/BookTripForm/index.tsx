import { createNewBooking } from "../../helpers/createNewBooking";
import { createBooking } from "../../services/bookings";
import { Input } from "../Input";
import { TripInfo } from "../TripInfo";
import { FC, FormEvent, useState } from "react";

interface BookTripFormProps {
  title: string;
  duration: number;
  level: string;
  price: number;
  tripId: string;
  onClose: () => void;
}

export const BookTripForm: FC<BookTripFormProps> = ({
  title,
  duration,
  level,
  price,
  tripId,
  onClose,
}) => {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("1");
  const onNumberOfGuestsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPeople(event.target.value);
  };

  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);

    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    const tomorrowFormatted = `${year}-${month}-${day}`;

    if (event.target.value < tomorrowFormatted) {
      return alert("Please select valid date");
    }

    setDate(event.target.value);
  };
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
    const newBooking = createNewBooking(tripId, people, date);
    createBooking(newBooking);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="book-trip-popup__form"
      autoComplete="off"
    >
      <TripInfo
        title={title}
        prefix={"book-"}
        duration={duration}
        level={level}
        container={"popup"}
      />
      <Input
        heading={"Date"}
        testId={"book-trip-popup-date"}
        name={"date"}
        type={"date"}
        required={true}
        value={date}
        onChange={onDateChange}
      />
      <Input
        heading={"Number of guests"}
        testId={"book-trip-popup-guests"}
        name={"guests"}
        type={"number"}
        required={true}
        value={people}
        min={"1"}
        max={"10"}
        onChange={onNumberOfGuestsChange}
      />

      <span className="book-trip-popup__total">
        Total:
        <output
          data-test-id="book-trip-popup-total-value"
          className="book-trip-popup__total-value"
        >
          {Number(people) * price}$
        </output>
      </span>
      <button
        data-test-id="book-trip-popup-submit"
        className="button"
        type="submit"
      >
        Book a trip
      </button>
    </form>
  );
};
