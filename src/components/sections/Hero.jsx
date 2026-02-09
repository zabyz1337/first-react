import bgShape from "../../assets/hero-bg.svg";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import heroImg from "../../assets/hero-image.svg";

export default function Hero() {
  return (
    <section id="section-hero">
      {/* Background shape */}
      <div className="hero-bg-shape">
        <img src={bgShape} alt="Background shape" />
      </div>

      <div className="container hero-content">
        {/* Text */}
        <div className="hero-text">
          <h1>
            Один клик <br />и работа в кармане
          </h1>
        </div>

        {/* Search bar */}
        <div className="search-bar">
          <div className="search-input-group">
            <div className="icon-wrapper">
              <img src={searchIcon} alt="Search" />
            </div>
            <input
              type="text"
              placeholder="Должность или компания"
              className="search-input"
            />
          </div>

          <div className="divider"></div>

          <div className="search-input-group">
            <div className="icon-wrapper">
              <img src={locationIcon} alt="Location" />
            </div>
            <input
              type="text"
              placeholder="Город, Страна"
              className="search-input"
            />
          </div>

          <button className="btn-search">Поиск</button>
        </div>

        {/* Hero image */}
        <div className="hero-image">
          <img src={heroImg} alt="Hero illustration" />
        </div>
      </div>
    </section>
  );
}
