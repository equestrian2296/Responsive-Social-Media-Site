import React from "react";
import "./NavbarOption.css";

function NavbarOption({ Icon, text, active }) {
  return (
    <div className={`navbarOption ${active ? "navbarOption--active" : ""}`}>
      <Icon className="MuiSvgIcon-root" />
      <h2>{text}</h2>
    </div>
  );
}

export default NavbarOption;
