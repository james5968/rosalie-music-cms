import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <ul className="menu-list">
                <li>
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/fees">
                    Fees
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
