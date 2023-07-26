import { FC } from "react";
import "./tripsListItem.scss";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";

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
      <img
        className="image"
        data-test-id="trip-card-image"
        src={image}
        alt={title}
      />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 data-test-id="trip-card-title" className="trip-info__title">
            {title}
          </h3>
          <div className="trip-info__content">
            <span
              data-test-id="trip-card-duration"
              className="trip-info__duration"
            >
              <strong>{duration}</strong> days
            </span>
            <span data-test-id="trip-card-level" className="trip-info__level">
              {level}
            </span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong
            data-test-id="trip-card-price-value"
            className="trip-price__value"
          >
            {price} $
          </strong>
        </div>
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
