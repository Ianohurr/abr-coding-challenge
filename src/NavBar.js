import { Link, Route } from "react-router-dom";

export function NavBar({ navLinks, sendRegion }) {
  return (
    <div className="navbar">
      {navLinks.map((link, index) => (
        <div key={index}>
          <Link to={link}>{link}</Link>
        </div>
      ))}
    </div>
  );
}
