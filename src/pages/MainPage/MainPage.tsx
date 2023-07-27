import { FC, useState } from "react";
import "./mainPage.scss";
import { Filter } from "../../components/Filter";
import { Trip } from "../../types/types";
import { getTrips } from "../../services/trips";
import { TripsList } from "../../components/TripsList";

const allTrips: Trip[] = getTrips();

const MainPage: FC = () => {
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(allTrips);

  const handleFilter = (
    searchQuery: string,
    duration: string,
    level: string
  ) => {
    const trips = allTrips.filter((trip) => {
      const matchSearch =
        trip.title.toLowerCase().search(searchQuery.toLowerCase()) !== -1;

      let matchDuration = null;

      switch (duration) {
        case "0_x_5":
          matchDuration = trip.duration <= 5;
          break;
        case "5_x_10":
          matchDuration = trip.duration >= 5 && trip.duration < 10;
          break;
        case "10_x":
          matchDuration = trip.duration >= 10;
          break;
        default:
          matchDuration = true;
      }

      const matchDifficulty = !level || trip.level === level;

      return matchSearch && matchDuration && matchDifficulty;
    });
    setFilteredTrips(trips);
  };

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter onFilter={handleFilter} />
      <TripsList filteredTrips={filteredTrips} />
    </main>
  );
};
export default MainPage;
