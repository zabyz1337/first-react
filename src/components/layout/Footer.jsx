import { cities } from "../../data/cities";

export default function Footer() {
  return (
    <section id="section-footer">
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <span className="footer-label">Популярные города</span>

            <div className="cities-list">
              {cities.map((city) => (
                <a key={city} href="#">
                  {city}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="footer-logo">Cooljob</div>
            <div className="social-icons">
              <a href="#">
                <span>FB</span>
              </a>
              <a href="#">
                <span>IG</span>
              </a>
              <a href="#">
                <span>TW</span>
              </a>
              <a href="#">
                <span>YT</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
