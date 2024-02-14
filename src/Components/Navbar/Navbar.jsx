import "./Navbar.css";
import "w3-css/w3.css";

import { FaGraduationCap } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      {/* logo and name */}
      <div className="nav-wrap">
        <div className="logo">
          <FaGraduationCap className="w3-xxxlarge logo" />
          <h3 className="logo-name">Boundeye</h3>
        </div>

        {/* links to other pages */}
        <div className="links">
          <ul className="list">
            <li className="list-item">
              <button className="btn">About Us</button>
            </li>
            <li className="list-item">
              <button className="btn">Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
