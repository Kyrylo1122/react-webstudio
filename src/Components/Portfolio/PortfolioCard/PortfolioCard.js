import "./_PortfolioCard.scss";
export default function PortfolioCard({ item }) {
  return (
    <>
      <div className="card-overlay">
        <picture>
          <source
            srcSet={`
                        /images/img-portfolio/desk/imgdesk.portfolio${
                          item.id - 1
                        }-min.jpg    1x,
                        /images/img-portfolio/desk/imgdesk.portfolio${
                          item.id - 1
                        }@2x-min.jpg 2x
                      `}
            media="(min-width:1200px)"
          />
          <source
            srcSet={`
                        /images/img-portfolio/tabl/imgtabl.portfolio${
                          item.id - 1
                        }-min.jpg   1x,
                        /images/img-portfolio/tabl/imgtabl.portfolio${
                          item.id - 1
                        }@2x-min.jpg 2x
                      `}
            media="(min-width:768px)"
          />
          <source
            srcSet={`
                        /images/img-portfolio/mob/imgmob.portfolio.item${
                          item.id - 1
                        }-min.jpg    1x,
                        /images/img-portfolio/mob/imgmob.portfolio.item${
                          item.id - 1
                        }@2x-min.jpg 2x
                      `}
            media="(min-width:320px)"
          />
          <img
            src={`/images/img-portfolio/img-${item.id}.jpg`}
            alt={item.title}
            loading="lazy"
          />
        </picture>
        <p className="card-overlay__text">
          Технокряк это современная площадка распространения коронавируса.
          Компании используют эту платформу для цифрового шпионажа и атак на
          защищённые сервера конкурентов.
        </p>
      </div>

      <div className="portfolio-card__description">
        <h2 className="portfolio-card__title">{item.title}</h2>
        <p className="portfolio-card__text">{item.text}</p>
      </div>
    </>
  );
}
