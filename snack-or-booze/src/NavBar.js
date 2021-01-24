import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({pages}) {
  //props passed in will be looped over to create links in NavBar
  let pageData = []
  pages.map(page => pageData.push({name:page, path:`/${page}`}))

  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="" navbar>
          <NavItem>
            {pageData.map(page => <NavLink to={page.path}>{page.name}</NavLink>)}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
