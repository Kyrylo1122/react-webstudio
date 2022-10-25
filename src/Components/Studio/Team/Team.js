import TeamCardSet from "./TeamCardSet/TeamCardSet";
import "./_Team.scss";
const teamContentArray = [
  { id: 1, name: "Игорь Демьяненко", text: " Product Designer" },
  { id: 2, name: "Ольга Репина", text: " Frontend Developer" },
  { id: 3, name: "Николай Тарасов", text: "Marketing" },
  { id: 4, name: "Михаил Ермаков", text: "UI Designerr" },
];
export default function Team() {
  return (
    <section className="section team">
      <div className="container">
        <h2 className="section__title">Наша команда</h2>
        <TeamCardSet array={teamContentArray} />
      </div>
    </section>
  );
}
