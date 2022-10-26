import { NavLink } from "react-router-dom";

export default function NavigationList({ closeMenu }) {
  return (
    <ul className="navigation__list">
      <li className="navigation__item">
        <NavLink
          to="./studio"
          className="navigation__link"
          onClick={() => closeMenu()}
        >
          Студия
        </NavLink>
      </li>

      <li className="navigation__item">
        <NavLink
          to="./portfolio"
          className="navigation__link"
          onClick={() => closeMenu()}
        >
          Портфолио
        </NavLink>
      </li>
    </ul>
  );
}
