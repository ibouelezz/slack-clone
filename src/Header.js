import "./Header.css";
import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in user */}
        <Avatar className="header__avatar" alt="Ibrahim Ali" src="" />
        {/* Time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* Search icon */}
        <SearchIcon />
        {/* Input */}
        <input type="text" />
      </div>
      <div className="header__right">
        {/* Help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
