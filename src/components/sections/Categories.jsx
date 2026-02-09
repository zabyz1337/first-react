import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section id="section-categories">
      <div className="container">
        <h2 className="section-title">
          Работа <br />
          по категориям
        </h2>

        <div className="categories-grid">
          {categories.map((c) => (
            <div
              key={c.title}
              className={`category-card ${c.variant === "more" ? "more-card" : ""}`}
            >
              <div className="cat-icon">
                <img src={c.icon} alt={c.alt} />
              </div>
              <span className="cat-title">{c.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
