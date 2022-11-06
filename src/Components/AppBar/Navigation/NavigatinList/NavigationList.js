import { NavLink } from "react-router-dom";

const navContent = [
  { id: 1, text: "studio" },
  { id: 2, text: "portfolio" },
];

export default function NavigationList({ closeMenu }) {
  return (
    <ul className="navigation__list">
      {navContent.map(({ id, text }) => (
        <li key={id} className="navigation__item">
          <NavLink
            to={text === "studio" ? "/" : `${text}`}
            end={text === "studio" ? true : false}
            className="navigation__link"
            onClick={() => closeMenu()}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
