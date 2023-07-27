import { FC } from "react";

interface ImageComponentProps {
  className?: string;
  "data-test-id"?: string;
  src: string;
  alt: string;
}

export const ImageComponent: FC<ImageComponentProps> = ({
  className,
  "data-test-id": dataTestId,
  src,
  alt,
}) => {
  return (
    <img className={className} data-test-id={dataTestId} src={src} alt={alt} />
  );
};

export default ImageComponent;
