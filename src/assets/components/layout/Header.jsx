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
              <a href="#" className="nav-link">
                Поиск работы
              </a>
              <a href="#" className="nav-link">
                Поиск стартапов
              </a>
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
