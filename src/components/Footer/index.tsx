import { FC } from "react";
import Heart from "../../assets/heart.svg";
import "./footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        from
        <a className="footer__link" href="https://binary-studio.com">
          binary studio
        </a>
        with
        <img className="footer__icon" src={Heart} alt="heart" />
      </span>
    </footer>
  );
};
