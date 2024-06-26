import React from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../ThemeProvider"

const Navbar = () => {
  const { toggleTheme } = useTheme()
  return (
    <nav>
      <div>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input type="checkbox" onClick={toggleTheme} />
        <span>Change Theme</span>
      </div>
    </nav>
  )
}

export default Navbar
