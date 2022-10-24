export default function Team() {
  return (
    <section className="section team">
      <div className="container">
        <h2 className="section__title">Наша команда</h2>
        <ul className="team__list">
          <li className="team__item">
            <picture>
              <source
                srcset="
                    ./img/team/desktop/imgdesk.team1-min.jpg    1x,
                    ./img/team/desktop/imgdesk.team1@2x-min.jpg 2x
                  "
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
              <h3 className="team-card__title">Игорь Демьяненко</h3>
              <p lang="en" className="team-card__text">
                Product Designer
              </p>
              <ul className="social">
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="team__item">
            <picture>
              <source
                srcset="
                    ./img/team/desktop/imgdesk.team2-min.jpg    1x,
                    ./img/team/desktop/imgdesk.team2@2x-min.jpg 2x
                  "
                media="(min-width:1200px)"
              />

              <source
                srcset="
                    ./img/team/tabl/imgtabl.team2-min.jpg    1x,
                    ./img/team/tabl/imgtabl.team2-2x-min.jpg 2x
                  "
                media="(min-width:768px)"
              />
              <source
                srcset="
                    ./img/team/mob/imgmob.teammate2-min.jpg    1x,
                    ./img/team/mob/imgmob.teammate2@2x-min.jpg 2x
                  "
                media="(max-width:767px)"
              />
              <img
                src="./img/team/mob/imgmob.teammate2-min.jpg"
                alt="Ольга Репина"
              />
            </picture>

            <div className="team-card">
              <h3 className="team-card__title">Ольга Репина</h3>
              <p lang="en" className="team-card__text">
                Frontend Developer
              </p>
              <ul className="social">
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="team__item">
            <picture>
              <source
                srcset="
                    ./img/team/desktop/imgdesk.team3-min.jpg    1x,
                    ./img/team/desktop/imgdesk.team3@2x-min.jpg 2x
                  "
                media="(min-width:1200px)"
              />

              <source
                srcset="
                    ./img/team/tabl/imgtabl.team3-min.jpg    1x,
                    ./img/team/tabl/imgtabl.team3@2x-min.jpg 2x
                  "
                media="(min-width:768px)"
              />
              <source
                srcset="
                    ./img/team/mob/imgmob.teammate3-min.jpg    1x,
                    ./img/team/mob/imgmob.teammate3@2x-min.jpg 2x
                  "
                media="(max-width:767px)"
              />
              <img
                src="./img/team/mob/imgmob.teammate3-min.jpg"
                alt="Николай Тарасов"
              />
            </picture>

            <div className="team-card">
              <h3 className="team-card__title">Николай Тарасов</h3>
              <p lang="en" className="team-card__text">
                Marketing
              </p>
              <ul className="social">
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="team__item">
            <picture>
              <source
                srcset="
                    ./img/team/desktop/imgdesk.team4-min.jpg    1x,
                    ./img/team/desktop/imgdesk.team4@2x-min.jpg 2x
                  "
                media="(min-width:1200px)"
              />

              <source
                srcset="
                    ./img/team/tabl/imgtabl.team4-min.jpg    1x,
                    ./img/team/tabl/imgtabl.team4@2x-min.jpg 2x
                  "
                media="(min-width:768px)"
              />
              <source
                srcset="
                    ./img/team/mob/imgmob.teammate4-min.jpg    1x,
                    ./img/team/mob/imgmob.teammate4@2x-min.jpg 2x
                  "
                media="(max-width:767px)"
              />
              <img
                src="./img/team/mob/imgmob.teammate4-min.jpg"
                alt="Михаил Ермаков"
              />
            </picture>

            <div className="team-card">
              <h3 className="team-card__title">Михаил Ермаков</h3>
              <p lang="en" className="team-card__text">
                UI Designer
              </p>
              <ul className="social">
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link--team social__link">
                    <svg className="social__icon" width="20px" height="20px">
                      <use href="./icons.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
