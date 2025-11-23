import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import "./NavLink.css";

interface CustomNavLinkProps extends NavLinkProps {
  icon: string;
  text: string;
}

export default function NavLink({ icon, text, to }: CustomNavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      <button className="nav-button">
        <span>{icon}</span> {text}
      </button>
    </RouterNavLink>
  );
}
