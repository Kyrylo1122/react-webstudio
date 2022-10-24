import { FaTelegramPlane } from "react-icons/fa";
import "./_FooterSubscribe.scss";
export default function FooterSubscribe() {
  return (
    <div className="footer-subscribe footer__container--item">
      <p className="footer__text">Подпишитесь на рассылку</p>
      <form>
        <div className="footer-subscribe__form">
          <input
            type="text"
            name="subscribe"
            className="footer-subscribe__input"
            placeholder="E-mail"
          />
          <button type="submit" className="btn footer-subscribe__btn">
            <span>Подписаться</span>
            <FaTelegramPlane size="1.5rem" />
          </button>
        </div>
      </form>
    </div>
  );
}
