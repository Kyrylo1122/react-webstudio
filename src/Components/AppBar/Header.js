import Contacts from "./Contacts/Contacts";
import Navigation from "./Navigation/Navigation";
import "./_Header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Navigation />
        <Contacts />
      </div>
    </header>
  );
}
