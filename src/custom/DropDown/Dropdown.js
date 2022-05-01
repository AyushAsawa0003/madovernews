import React, { useEffect, useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const items = [
  "Trending",
  "All News",
  "Latest",
  "India",
  "World",
  "Business",
  "Sports",
  "Politics",
  "Technology",
  "Startups",
  "Entertainment",
  "Science",
  "Automobile",
  "IPL",
  "Soccer",
];

const Dropdown = ({ setSection, setShowCategory }) => {
  const onClickHandle = (item) => {
    setSection(item);
    setShowCategory(false);
  };

  return (
    <div className="flex-column dropdown-main bg-secondary">
      {items.map((item) => (
        <div className="element" onClick={() => onClickHandle(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
