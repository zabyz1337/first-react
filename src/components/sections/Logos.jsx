import { logos } from "../../data/logos";

export default function Logos() {
  return (
    <section id="section-logos">
      <div className="container logos-container">
        <span className="logos-label">Помогаем найти работу:</span>
        <div className="logos-grid">
          {logos.map((l) => (
            <img key={l.alt} src={l.src} alt={l.alt} className="logo-item" />
          ))}
        </div>
      </div>
    </section>
  );
}
