import { FC } from "react";
import "./tripsListItem.scss";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";
import { ImageComponent } from "../TripImage";
import { TripInfo } from "../TripInfo";
import TripPrice from "../TripPrice";

export interface TripItemProps {
  id: string;
  title: string;
  level: string;
  duration: number;
  price: number;
  image: string;
}

export const TripsListItem: FC<TripItemProps> = ({
  id,
  title,
  level,
  duration,
  price,
  image,
}) => {
  return (
    <li data-test-id="trip-card" className="trip-card">
      <ImageComponent
        className="image"
        data-test-id="trip-card-image"
        src={image}
        alt={`${title} photo`}
      />
      <div className="trip-card__content">
        <TripInfo
          title={title}
          duration={duration}
          level={level}
          container="card"
        />
        <TripPrice price={price} container="card" />
      </div>
      <Link
        data-test-id="trip-card-link"
        to={`${PageRoutes.Trip}/${id}`}
        className="button"
      >
        Discover a trip
      </Link>
    </li>
  );
};
