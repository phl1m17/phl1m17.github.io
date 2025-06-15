import { NavLink } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "./Header.css";

function Nav() {
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    { to: "/projects", label: "Projects" },
    { to: "/photography", label: "Photography" },
  ];

  return (
    <nav>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => {
            if (hovered === to) return "hovered"; // if this link is hovered, highlight it
            if (!hovered && isActive) return "active"; // if not hovering, highlight active
            return "";
          }}
          onMouseEnter={() => setHovered(to)}
          onMouseLeave={() => setHovered(null)}
        >
          {label}
        </NavLink>
      ))}
      <DarkModeToggle />
    </nav>
  );
}

export default Nav;
