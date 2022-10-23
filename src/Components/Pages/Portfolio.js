import { useEffect, useState } from "react";
import img from "../../img/img-portfolio/desk/imgdesk.portfolio1-min.jpg";
import PortfolioBtn from "./PortfolioBtn/PortfolioBtn";

const portfolioPosters = [
  { id: 1, title: "Технокряк", text: "Веб-сайты" },
  { id: 2, title: "Tech", text: "Приложения" },
  { id: 3, title: "Sum ", text: "Маркетинг" },
  { id: 4, title: "Bro", text: "Веб-сайты" },
  { id: 5, title: "Dance", text: "Дизайн" },
  { id: 6, title: "Skate", text: "Веб-сайты" },
  { id: 7, title: "Frog", text: "Приложения" },
  { id: 8, title: "Latinos", text: "Веб-сайты" },
  { id: 9, title: "Beak", text: "Дизайн" },
];
export default function Portfolio() {
  const [filter, setFilter] = useState("Все");
  const [filteredArray, setFilteredArray] = useState([]);
  useEffect(() => {
    if (filter === "Все") {
      setFilteredArray(portfolioPosters);
      return;
    }
    const array = portfolioPosters.filter((poster) => poster.text === filter);
    setFilteredArray(array);
  }, [filter]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h2 className="visually-hidden">portfolio</h2>
          <div className="portfolio-btn">
            <PortfolioBtn setFilter={setFilter} />
          </div>

          <ul className="card-set">
            {filteredArray.map(({ id, title, text }) => (
              <li key={id} className="card-set__item">
                <div className="card-set__description">
                  <h2 className="card-set__title">{title}</h2>
                  <p className="card-set__text">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
