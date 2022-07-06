import { Link } from "gatsby"
import React from "react"
import { FooterLogo } from "../utils/imgImport"
import { nav_menus } from "../utils/staticData"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-menu">
        <img src={FooterLogo} alt="footer logo" />
        <ul>
          {nav_menus.map((item, idx) => (
            <li key={idx}>
              <Link to={item.to} className="nav-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p>Email us : contact@visionair.digital</p>
    </div>
  </footer>
)

export default Footer
