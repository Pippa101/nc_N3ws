import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <span className="headerDecoration">Deco 1</span>
      <Link to="/" className="links">
        <h1>
          N<span className="orange">3</span>WS
        </h1>
      </Link>
      <span className="headerDecoration"> Deco 1 </span>
    </header>
  );
};

export default Header;
