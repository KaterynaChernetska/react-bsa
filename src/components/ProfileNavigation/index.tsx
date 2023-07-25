import { FC } from "react";
import "./profileNavigation.scss";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";

export const ProfileNavigation: FC = () => {
  return (
    <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
      <li
        data-test-id="header-profile-nav-username"
        className="profile-nav__item profile-nav__username"
      >
        John Doe
      </li>
      <li className="profile-nav__item">
        <Link
          data-test-id="header-profile-nav-sign-out"
          to={PageRoutes.SignIn}
          className="profile-nav__sign-out button"
        >
          Sign Out
        </Link>
      </li>
    </ul>
  );
};
