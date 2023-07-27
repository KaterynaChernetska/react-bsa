import Bookings from "../data/mockData/bookings.json";
import { Booking } from "../types/types";

const bookingsCopy = Bookings.slice();

const getBookings = () => {
  return bookingsCopy;
};

const getBookingById = (id: string) => {
  return bookingsCopy.find((booking) => booking.id === id);
};

const createBooking = (booking: Booking) => {
  bookingsCopy.push(booking);
};

const deleteBooking = (id: string) => {
  const index = bookingsCopy.findIndex((booking) => booking.id === id);

  if (index !== -1) {
    bookingsCopy.splice(index, 1);

    return [...bookingsCopy];
  }

  return bookingsCopy;
};

export { getBookings, getBookingById, createBooking, deleteBooking };
