import React from "react";
import { NavLink } from "react-router-dom";

function TopNavLink(props) {
  const { href, children } = props;
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? "active nav-text" : "nav-text";
      }}
      to={href}
    >
      {children}
    </NavLink>
  );
}

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <TopNavLink href="/">Home</TopNavLink>
          </li>
          <li>
            <TopNavLink href="/posts">Posts</TopNavLink>
          </li>
          <li>
            <TopNavLink href="/profile">Profile</TopNavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
