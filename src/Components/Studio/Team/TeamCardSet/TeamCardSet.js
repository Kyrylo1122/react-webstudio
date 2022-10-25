import Socials from "../../../Socials/Socials";
import "./_TeamCardSet.scss";
export default function TeamCardSet({ array }) {
  return (
    <ul className="team__list">
      {array.map(({ id, name, text }) => (
        <li key={id} className="team__item">
          <picture>
            <source
              srcSet={`/images/team/desktop/imgdesk.team${id}-min.jpg 1x,
                    /images/team/desktop/imgdesk.team${id}@2x-min.jpg 2x
                  `}
              media="(min-width:1200px)"
            />

            <source
              srcSet={`
                    /images/team/tabl/imgtabl.team${id}-min.jpg    1x,
                    /images/team/tabl/imgtabl.team${id}@2x-min.jpg 2x
                  `}
              media="(min-width:768px)"
            />
            <source
              srcSet={`/images/team/mob/imgmob.teammate${id}-min.jpg 1x,
                    /images/team/mob/imgmob.teammate${id}@2x-min.jpg 2x
                  `}
              media="(max-width:767px)"
            />
            <img
              src={`/images/team/mob/imgmob.teammate${id}-min.jpg`}
              alt={name}
              loading="lazy"
            />
          </picture>

          <div className="team-card">
            <h3 className="team-card__title">{name}</h3>
            <p lang="en" className="team-card__text">
              {text}
            </p>
            <div className="team-card__socials">
              <Socials />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
