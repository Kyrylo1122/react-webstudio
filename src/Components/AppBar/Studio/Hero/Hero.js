import "./_Hero.scss";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">ЭФФЕКТИВНЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА</h1>
        <button type="button" className="btn" data-modal-open>
          Заказать услугу
        </button>
      </div>
    </section>
  );
}
