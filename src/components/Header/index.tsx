import { FC } from "react";
import './header.scss';
import { Link } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";

export const Header: FC = () => {
    return (
        <header className="header">
        <div className="header__inner">
          <Link data-test-id="header-logo" to={PageRoutes.Index} className="header__logo">
            Travel App
          </Link>
          {/* <nav data-test-id="header-nav" className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <a
                  data-test-id="header-bookings-link"
                  href="./bookings.html"
                  className="nav-header__inner"
                >
                  <span className="visually-hidden">Bookings</span>
                  <img src="./assets/images/briefcase.svg" alt="bookings" />
                </a>
              </li>
              <li className="nav-header__item" title="Profile">
                <div
                  data-test-id="header-profile-nav"
                  className="nav-header__inner profile-nav"
                  tabindex="0"
                >
                  <span className="visually-hidden">Profile</span>
                  <img src="./assets/images/user.svg" alt="profile" />
                  <ul
                    data-test-id="header-profile-nav-list"
                    className="profile-nav__list"
                  >
                    <li
                      data-test-id="header-profile-nav-username"
                      className="profile-nav__item profile-nav__username"
                    >
                      John Doe
                    </li>
                    <li className="profile-nav__item">
                      <a
                        data-test-id="header-profile-nav-sign-out"
                        href="./sign-in.html"
                        className="profile-nav__sign-out button"
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
    )
}

{/* <header class="header">
<div class="header__inner">
  <a data-test-id="header-logo" href="./index.html" class="header__logo">
    Travel App
  </a>
  <nav data-test-id="header-nav" class="header__nav">
    <ul class="nav-header__list">
      <li class="nav-header__item" title="Bookings">
        <a
          data-test-id="header-bookings-link"
          href="./bookings.html"
          class="nav-header__inner"
        >
          <span class="visually-hidden">Bookings</span>
          <img src="./assets/images/briefcase.svg" alt="bookings" />
        </a>
      </li>
      <li class="nav-header__item" title="Profile">
        <div
          data-test-id="header-profile-nav"
          class="nav-header__inner profile-nav"
          tabindex="0"
        >
          <span class="visually-hidden">Profile</span>
          <img src="./assets/images/user.svg" alt="profile" />
          <ul
            data-test-id="header-profile-nav-list"
            class="profile-nav__list"
          >
            <li
              data-test-id="header-profile-nav-username"
              class="profile-nav__item profile-nav__username"
            >
              John Doe
            </li>
            <li class="profile-nav__item">
              <a
                data-test-id="header-profile-nav-sign-out"
                href="./sign-in.html"
                class="profile-nav__sign-out button"
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</div>
</header> */}