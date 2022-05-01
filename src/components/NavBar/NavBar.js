import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Dropdown from "../../custom/DropDown/Dropdown";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

// ask quiz to check whether user has not just left the screen

const NavBar = ({ setSection, section, user }) => {
  console.log(user.name);

  const [showCategory, setShowCategory] = useState(false);

  return (
    <>
      <div className="nav-main fg-primary bg-primary">
        {/* Title */}
        <div className="nav-element">
          <div className="title">MON</div>
          <div className="title-disc">MAD OVER NEWS</div>
        </div>

        {/* Navigation Bar Options */}
        <div className="nav-element">
          <div className="flex-row options">
            <span
              className="element"
              onClick={() => setShowCategory(!showCategory)}
            >
              {section}
              {showCategory ? (
                <FaCaretUp className="element-icon" />
              ) : (
                <FaCaretDown className="icon" />
              )}
            </span>

            {showCategory ? (
              <Dropdown
                setSection={setSection}
                setShowCategory={setShowCategory}
              />
            ) : (
              <></>
            )}

            <span className="element">Blog</span>
            <span className="element">Download</span>
            <span className="element">Wallet</span>
            <Link
              to={user.length === 0 ? "/login" : "/logout"}
              style={{ textDecorationLine: "none" }}
              className="fg-primary element"
            >
              <span className="element">
                {user.length === 0 ? "Login" : user.name}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
