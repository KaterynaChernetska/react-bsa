import { FC, useState } from "react";
import "./bookingsPage.scss";
import { deleteBooking, getBookings } from "../../services/bookings";
import { BookingsList } from "../../components/BookingsList";
import { Booking } from "../../types/types";

const defaultBookings = getBookings();

const BookingsPage: FC = () => {
  const [bookings, setBookings] = useState<Booking[]>(
    defaultBookings.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )
  );

  const handleDeleteButtonClick = (id: string) => {
    const updatedBookings = deleteBooking(id);
    setBookings(updatedBookings);
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <BookingsList
        bookings={bookings}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
    </main>
  );
};

export default BookingsPage;
