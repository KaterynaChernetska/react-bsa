import { Trip } from "../types/types";

export const filterByDuration = (value: string, Trips: Trip[]): Trip[] => {
    switch (value) {
      case "0_x_5":
        return Trips.filter((trip) => trip.duration < 5);
      case "5_x_10":
        return Trips.filter((trip) => trip.duration < 10);
      case "10_x":
        return Trips.filter((trip) => trip.duration >= 10);
      default:
        return Trips;
    }
  };