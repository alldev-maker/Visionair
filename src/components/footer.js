import { Link } from "gatsby"
import React from "react"
import { FooterLogo } from "../utils/imgImport"
import { nav_menus } from "../utils/staticData"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="d-md-flex align-items-center justify-content-between">
        <img src={FooterLogo} alt="footer logo" />
        <ul className="footer-menu">
          {nav_menus.map((item, idx) => (
            <li key={idx}>
              <Link to={item.to} className="nav-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="contact-mail">Email us : contact@visionair.digital</p>
    </div>
  </footer>
)

export default Footer
