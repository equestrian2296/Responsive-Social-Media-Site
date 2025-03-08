import React, { useState, useEffect } from "react";
import "./NavBar.css";
import NavbarOption from "./NavbarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import Link from "next/link"; // Import Link for navigation

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token"); // Clear the token
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div className="navbar">
      <img src="path/to/your/logo.png" alt="Logo" className="navbar__logo" />

      {/* Navigation Options */}
      <NavbarOption active Icon={HomeIcon} text="Home" />
      <NavbarOption Icon={SearchIcon} text="Explore" />
      <NavbarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <NavbarOption Icon={MailOutlineIcon} text="Messages" />
      <NavbarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <NavbarOption Icon={ListAltIcon} text="Lists" />
      <NavbarOption Icon={PermIdentityIcon} text="Profile" />
      <NavbarOption Icon={MoreHorizIcon} text="More" />

      {/* Sign Out Button */}
      <Button onClick={handleSignOut} variant="outlined" className="navbar__signout">
        Sign Out
      </Button>

      {/* Theme Switcher Buttons */}
      <div className="theme-toggle">
        <button
          onClick={() => handleThemeChange("light")}
          className={`theme-btn ${theme === "light" ? "active light" : ""}`}
        >
          🌙
        </button>
        <button
          onClick={() => handleThemeChange("dark")}
          className={`theme-btn ${theme === "dark" ? "active dark" : ""}`}
        >
          🌑
        </button>
        <button
          onClick={() => handleThemeChange("love")}
          className={`theme-btn ${theme === "love" ? "active love" : ""}`}
        >
          💖
        </button>
        <button
          onClick={() => handleThemeChange("chill")}
          className={`theme-btn ${theme === "chill" ? "active chill" : ""}`}
        >
          ❄️
        </button>
      </div>

      {/* Post Button */}
      <Button variant="outlined" className="navbar__post" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Navbar;
