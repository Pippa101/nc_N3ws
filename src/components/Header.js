import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="headerDecoration"></div>
      <Link to="/" className="links">
        <h1>
          N<span className="orange">3</span>WS
        </h1>
      </Link>
      <div className="headerDecoration"></div>
    </header>
  );
};

export default Header;
