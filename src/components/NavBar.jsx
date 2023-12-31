import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">
        Главная
      </Link>
      <Link to="/Catalog" className="nav-link">
        Каталог
      </Link>
      <Link to="/" className="nav-link">
        Акции и Новости
      </Link>
      <Link to="/Info" className="nav-link">
        Как купить
      </Link>
      <Link to="/Contacts" className="nav-link">
        Контакты
      </Link>
    </nav>
  );
}

export default NavBar;
