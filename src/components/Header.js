import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <span className="headerDecoration">Deco 1</span>
      <Link to="/" id="h1-link">
        <h1>
          N<span id="orange3">3</span>WS
        </h1>
      </Link>
      <span className="headerDecoration"> Deco 1 </span>
    </header>
  );
};

export default Header;
