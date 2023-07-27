import { FC } from "react";
import './tripPrice.scss';
interface TripPriceProps {
  price: number;
  container: string;
}

const TripPrice: FC<TripPriceProps> = ({ price, container }) => {
  return (
    <div className="trip-price">
      <span>Price</span>
      <strong
        data-test-id={`trip-${container}-price-value`}
        className="trip-price__value"
      >
        {price} $
      </strong>
    </div>
  );
};

export default TripPrice;
