import Bookings from "../data/mockData/bookings.json";
import { Booking } from "../types/types";


const getBookings = () => {
    return Bookings;
  };
  
  const getBookingById = (id: string) => {
    return Bookings.find((booking) => booking.id === id);
  };
  
  const createBooking = (booking: Booking) => {
    return Bookings.push(booking);
  };
  
  export { getBookings, getBookingById,  createBooking};