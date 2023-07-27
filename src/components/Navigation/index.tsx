import { FC } from "react";
import Portfolio from "../../assets/briefcase.svg";
import User from "../../assets/user.svg";
import "./navigation.scss";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";
import { ProfileNavigation } from "../ProfileNavigation";

export const HeaderNav: FC = () => {
  return (
    <nav data-test-id="header-nav" className="header__nav">
      <ul className="nav-header__list">
        <li className="nav-header__item" title="Bookings">
          <Link
            data-test-id="header-bookings-link"
            to={PageRoutes.Bookings}
            className="nav-header__inner"
          >
            <span className="visually-hidden">Bookings</span>
            <img src={Portfolio} alt="bookings" />
          </Link>
        </li>
        <li className="nav-header__item" title="Profile">
          <div
            data-test-id="header-profile-nav"
            className="nav-header__inner profile-nav"
            tabIndex={0}
          >
            <span className="visually-hidden">Profile</span>
            <img src={User} alt="profile" />
            <ProfileNavigation />
          </div>
        </li>
      </ul>
    </nav>
  );
};
