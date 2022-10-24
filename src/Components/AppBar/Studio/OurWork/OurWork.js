import OurWorkList from "./OurWorkList/OurWorkList";

const OurWorkArray = [
  { id: 1, text: "ДЕСКТОПНЫЕ ПРИЛОЖЕНИЯ" },
  { id: 2, text: "МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ" },
  { id: 3, text: "ДИЗАЙНЕРСКИЕ РЕШЕНИЯ ПРИЛОЖЕНИЯ" },
];
export default function OurWork() {
  return (
    <section className="section section__our-work">
      <div className="container">
        <h2 className="section__title">Чем мы занимаемся</h2>
        <OurWorkList array={OurWorkArray} />
      </div>
    </section>
  );
}
