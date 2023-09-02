import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Dropdown, DropdownButton, SplitButton } from "react-bootstrap";
import "../Desktop1.css";

const NavBar = ({ onCategoryChange }) => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
    },
    { name: "Contact Us", id: "contact" },
  ];

  const [activeTab, setActiveTab] = useState("home");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="top-menu">
        {navbar.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${activeTab === item.id ? "active" : ""} ${
              item.id
            }-item`}
            onClick={() => handleTabChange(item.id)}
          >
            {item.name}
            {item.id === "product" && (
              <DropdownButton
                id={`dropdown-${item.id}`}
                className="dropdown"
                title="OUR PRODUCTS"
                variant="primary"
                align="start"
                drop="down"
              >
                <ul>
                  {categories.map((category) => (
                    <li>
                      <a key={category} href={`#${category}`}>
                        <a
                          href={`#${category}`}
                          onClick={() => onCategoryChange(category)}
                        >
                          {category}
                        </a>
                      </a>
                    </li>
                  ))}
                </ul>
              </DropdownButton>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;
