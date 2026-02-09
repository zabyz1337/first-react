import { vacancies } from "../../data/vacancies";

export default function Vacancies() {
  return (
    <section id="section-vacancies">
      <div className="container">
        <h2 className="vacancies-title">Новые вакансии</h2>
        <p className="vacancies-subtitle">
          Найди работу своей мечты прямо сейчас
        </p>

        <div className="vacancies-grid">
          {vacancies.map((v) => (
            <div key={v.title} className="job-card">
              <div className="job-header">
                <div className="job-tag-group">
                  <img src={v.tagDot} className="tag-dot" alt="" />
                  <span className="job-tag">{v.tag}</span>
                </div>
              </div>

              <h3 className="job-title">{v.title}</h3>

              <div className="job-location">
                <img src={v.locationIcon} alt="loc" />
                <span>{v.location}</span>
              </div>

              <div className="job-footer">
                <img
                  src={v.companyLogo}
                  alt={v.company}
                  className="company-logo"
                />
                <span className="job-time">
                  {v.company}, {v.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="all-vacancies-wrapper">
          <a href="#" className="btn-all-vacancies">
            Все вакансии
          </a>
        </div>
      </div>
    </section>
  );
}
