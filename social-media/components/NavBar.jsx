import React, { useState, useEffect } from "react";
import "./NavBar.css";
import NavbarOption from "./NavbarOption";

// MUI Icons
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuIcon from "@mui/icons-material/Menu";

// MUI Button
import { Button } from "@mui/material";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [collapsed, setCollapsed] = useState(false);

  // Load theme & sidebar state from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);

    const storedSidebarState = localStorage.getItem("sidebarCollapsed");
    if (storedSidebarState === "true") setCollapsed(true);
  }, []);

  // Change theme
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    localStorage.setItem("sidebarCollapsed", !collapsed);
  };

  return (
    <nav className={`navbar ${collapsed ? "collapsed" : ""}`}>
      {/* Toggle Button */}
      <button className="menu-toggle" onClick={toggleSidebar}>
        <MenuIcon />
      </button>

      {/* Logo (replace path/to/logo.png with your actual logo) */}
      <img src="" alt="Logo" className="navbar__logo" />

      {/* Theme Switcher */}
      <div className="theme-switcher">
        <button
          onClick={() => handleThemeChange("light")}
          className={`theme-btn ${theme === "light" ? "active" : ""}`}
        >
          🌙
        </button>
        <button
          onClick={() => handleThemeChange("dark")}
          className={`theme-btn ${theme === "dark" ? "active" : ""}`}
        >
          🌑
        </button>
        <button
          onClick={() => handleThemeChange("love")}
          className={`theme-btn ${theme === "love" ? "active" : ""}`}
        >
          💖
        </button>
        <button
          onClick={() => handleThemeChange("chill")}
          className={`theme-btn ${theme === "chill" ? "active" : ""}`}
        >
          ❄️
        </button>
      </div>

      {/* Navigation Links */}
      <div className="nav">
        <NavbarOption active Icon={HomeIcon} text="Home" />
        <NavbarOption Icon={SearchIcon} text="Explore" />
        <NavbarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <NavbarOption Icon={MailOutlineIcon} text="Messages" />
        <NavbarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <NavbarOption Icon={ListAltIcon} text="Lists" />
        <NavbarOption Icon={PermIdentityIcon} text="Profile" />
        <NavbarOption Icon={MoreHorizIcon} text="More" />
      </div>

      {/* Tweet Button */}
      <Button variant="contained" className="tweet-btn" fullWidth>
        Tweet
      </Button>
    </nav>
  );
}

export default Navbar;
