import { FC } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";
import { HeaderNav } from "../Navigation/index.tsx";

export const Header: FC = () => {
  const { pathname } = useLocation();
  const locationCheck = !["/sign-up", "/sign-in"].includes(pathname);
  
  return (
    <header className="header">
      <div className="header__inner">
        <Link
          data-test-id="header-logo"
          to={PageRoutes.Index}
          className="header__logo"
        >
          Travel App
        </Link>
        {locationCheck && <HeaderNav />}
      </div>
    </header>
  );
};
