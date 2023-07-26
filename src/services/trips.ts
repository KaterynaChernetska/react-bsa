import Trips from "../data/mockData/trips.json";

const getTrips = () => {
  return Trips;
};

const getTripById = (id: string) => {
  return Trips.find((trip) => trip.id === id);
};

export { getTrips, getTripById };
