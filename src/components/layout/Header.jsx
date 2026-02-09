import { headerNav } from "../../data/headerNav";

export default function Header() {
  return (
    <section id="section-header">
      <header className="site-header">
        <div className="container header-container">
          <div className="header-left">
            <a href="#" className="logo">
              Cooljob
            </a>

            <nav className="main-nav">
              {headerNav.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="header-right">
            <a href="#" className="nav-link">
              Регистрация
            </a>
            <a href="#" className="btn-login">
              Вход
            </a>
          </div>
        </div>
      </header>
    </section>
  );
}
