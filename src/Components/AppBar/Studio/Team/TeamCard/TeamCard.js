import Socials from "../../../../Socials/Socials";
export default function TeamCard({ array }) {
  return (
    <ul className="team__list">
      {array.map(({ id, name, text }) => (
        <li key={id} className="team__item">
          <picture>
            <source
              srcset={`/public/images/   1x,
                    ./img/team/desktop/imgdesk.team1@2x-min.jpg 2x
                  `}
              media="(min-width:1200px)"
            />

            <source
              srcset="
                    ./img/team/tabl/imgtabl.team1-min.jpg    1x,
                    ./img/team/tabl/imgtabl.team1@2x-min.jpg 2x
                  "
              media="(min-width:768px)"
            />
            <source
              srcset="
                    ./img/team/mob/imgmobteammate1-min.jpg    1x,
                    ./img/team/mob/imgmobteammate1@2x-min.jpg 2x
                  "
              media="(max-width:767px)"
            />
            <img
              src="./img/team/mob/imgmobteammate1-min.jpg"
              alt="Игорь Демьяненко"
            />
          </picture>

          <div className="team-card">
            <h3 className="team-card__title">{name}</h3>
            <p lang="en" className="team-card__text">
              {text}
            </p>
            <Socials />
          </div>
        </li>
      ))}
    </ul>
  );
}
