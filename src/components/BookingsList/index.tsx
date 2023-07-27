import { Booking } from "../../types/types";
import { BookingsListItem } from "../BookingsListItem";
import "./bookingsList.scss";
import { FC } from "react";

export interface BookingsProps {
  bookings: Booking[];
  handleDeleteButtonClick: (id: string) => void;
}

export const BookingsList: FC<BookingsProps> = ({
  bookings,
  handleDeleteButtonClick,
}) => {
  return (
    <ul className="bookings__list">
      {bookings.map((booking) => (
        <BookingsListItem
          key={booking.id}
          id={booking.id}
          totalPrice={booking.totalPrice}
          guests={booking.guests}
          title={booking.trip.title}
          date={booking.date}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      ))}
    </ul>
  );
};
