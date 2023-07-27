import { getTripById } from "../services/trips";
import { Trip } from "../types/types";

export const createNewBooking = (
  tripId: string,
  guests: string,
  date: string
) => {
  const numberOfGuests = parseInt(guests, 10);
  const trip = getTripById(tripId) as Trip;
  const newBooking = {
    id: crypto.randomUUID(),
    userId: crypto.randomUUID(),
    tripId,
    guests: numberOfGuests,
    date,
    trip: {
      title: trip.title,
      duration: trip.duration,
      price: trip.price,
    },
    totalPrice: trip.price * numberOfGuests,
    createdAt: new Date().toISOString(),
  };

  return newBooking;
};

// {
//     "id": "73b7df68-62f6-4a5f-9c87-f971637ac7a0",
//     "userId": "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
//     "tripId": "b192252e-2bb6-4cf3-b9cb-34a8a2f94891",
//     "guests": 2,
//     "date": "2024-06-23T14:37:00.049Z",
//     "trip": {
//       "title": "Greenland",
//       "duration": 19,
//       "price": 5395
//     },
//     "totalPrice": 10790,
//     "createdAt": "2022-05-22T17:42:49.537Z"
//   },
