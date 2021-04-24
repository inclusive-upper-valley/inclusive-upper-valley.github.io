import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      margin: `3rem auto`,
      maxWidth: 650,
      padding: `0 1rem`,
      marginBottom: `1.5rem`
    }}
  >
    <div>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h2 style={{ display: `inline` }}>{siteTitle}</h2>
      </Link>
      <div
        style={{
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link style={{}} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header