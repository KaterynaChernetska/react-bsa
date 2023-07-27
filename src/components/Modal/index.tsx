import { FC, useEffect } from "react";
import "./modal.scss";
import { createPortal } from "react-dom";
import { BookTripForm } from "../BookTripForm";

interface ModalProps {
  title: string;
  duration: number;
  level: string;
  price: number;
  tripId: string;
  onClose: () => void;
}
const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

export const Modal: FC<ModalProps> = ({
  title,
  price,
  duration,
  level,
  tripId,
  onClose,
}) => {
  useEffect(() => {
    const onModalClose = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onModalClose);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onModalClose);
    };
  }, [onClose]);

  return createPortal(
    <div>
      <div className="modal">
        <div data-test-id="book-trip-popup" className="book-trip-popup">
          <button
            onClick={onClose}
            data-test-id="book-trip-popup-close"
            className="book-trip-popup__close"
          >
            ×
          </button>
          <BookTripForm
            onClose={onClose}
            title={title}
            duration={duration}
            level={level}
            price={price}
            tripId={tripId}
          />
        </div>
      </div>
    </div>,
    modalRoot
  );
};
