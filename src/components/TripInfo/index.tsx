import { FC } from "react";

interface TripInfoProps {
  title: string;
  duration: number;
  level: string;
  container: string;
  prefix?: string;
}

export const TripInfo: FC<TripInfoProps> = ({
  title,
  duration,
  level,
  container,
  prefix='',
}) => {
  return (
    <div className="trip-info">
      <h3
        data-test-id={`${prefix}trip-${container}-title`}
        className="trip-info__title"
      >
        {title}
      </h3>
      <div className="trip-info__content">
        <span
          data-test-id={`${prefix}trip-${container}-duration`}
          className="trip-info__duration"
        >
          <strong>{duration}</strong> days
        </span>
        <span
          data-test-id={`${prefix}trip-${container}-level`}
          className="trip-info__level"
        >
          {level}
        </span>
      </div>
    </div>
  );
};
