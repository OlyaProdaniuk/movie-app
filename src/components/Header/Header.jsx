import React from "react";

import "../Header/Header.css";

import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Header({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--user">
        <a href="/">
          <Person2SharpIcon htmlColor="white" />
        </a>
        <a href="/">
          <SettingsOutlinedIcon htmlColor="white" />
        </a>
      </div>
    </header>
  );
}
export default Header;
