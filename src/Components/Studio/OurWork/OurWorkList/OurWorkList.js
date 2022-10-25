import "./_OurWorkList.scss";
export default function OurWorkList({ array }) {
  return (
    <ul className="work">
      {array.map(({ id, text }) => (
        <li key={id} className="work__item">
          <div className="work__overlay">
            <picture>
              <source
                srcSet={`/images/box${id}-min.jpg 1x, ./img/box${id}-2x-min.jpg 2x`}
                media="(min-width:1200px)"
              />
              <img
                src={`/images/box${id}-min.jpg`}
                alt={text}
                width="370"
                height="294"
                loading="lazy"
              />
            </picture>

            <p className="work__text">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
