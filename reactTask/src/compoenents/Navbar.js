import { Link } from "react-router-dom";
import logo from "./Images/logo.png"; // Import your logo image

function Navbar() {
  const linkStyle = {
    color: "white", // Set text color to white
    fontSize: "18px", // Increase font size
    fontWeight: "bold" // Make the text bold
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(24, 39, 50)" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: "50px", marginRight: "10px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"} style={linkStyle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={linkStyle}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
