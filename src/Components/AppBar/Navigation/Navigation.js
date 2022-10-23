import { NavLink } from "react-router-dom";
import "./_Navigation.scss";
import Logo from "../../Logo/Logo";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <Logo />
      </div>

      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/" className="navigation__current navigation__link ">
            Студия
          </NavLink>
        </li>

        <li className="navigation__item">
          <NavLink to="./portfolio" className="navigation__link ">
            Портфолио
          </NavLink>
        </li>

        <li className="navigation__item">
          <NavLink to="" className="navigation__link ">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
