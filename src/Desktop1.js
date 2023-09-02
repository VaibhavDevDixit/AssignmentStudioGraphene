import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Dropdown, DropdownButton, SplitButton } from "react-bootstrap";
import "./Desktop1.css";
import React, { useState, useEffect } from "react";
import NavBar from "./pages/Navbar";
import ProductList from "./pages/ProductList";

const Desktop1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory)
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFormErrors({});
    }
  };

  return (
    <a className="desktop-1">
      <div className="desktop-1-child" />
      <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <img className="group-item" alt="" src="/star-3.svg" />
        <img
          className="jessica-radanavong-ichpbhfd0pw-icon"
          alt=""
          src="/jessicaradanavongichpbhfd0pwunsplash@2x.png"
        />
        <div className="group-inner" />
        <img className="star-icon" alt="" src="/star-4.svg" />
        <div className="oregon-jacket">Oregon jacket</div>
        <div className="div">$124</div>
        <div className="line-div" />
      </div>
      <renderProductGrid />
     
      <div className="lorem-ipsum-dolor">Fresh</div>
      <div className="lorem-ipsum-dolor1">New products</div>
      <div className="lorem-ipsum-dolor2">Look</div>
      <div className="lorem-ipsum-dolor3">2022</div>
      <div className="apparel">Apparel</div>
      <div className="accessories">Accessories</div>
      <div className="best-sellers">Best sellers</div>
      <div className="off">50% off</div>
      <header className="desktop-1-item" />
      <footer className="desktop-1-inner" />
      <img className="icon" alt="" src="/18591063@2x.png" />
      <NavBar onCategoryChange={handleCategoryChange} />
      <div className="bag-0">BAG (0)</div>
      <div className="wishlist-0">WISHLIST (0)</div>
      <div className="shopkart">ShopKart</div>
      <div className="free-delivery">Free Delivery</div>
      <div className="return-policy">Return Policy</div>
      <div className="login">Login</div>
      <div className="follow-us">Follow US</div>
      <img className="layer-156-icon" alt="truck" src="/layer-156.svg" />
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img className="group-icon" alt="" src="/group-6.svg" />
      <div className="desktop-1-child1" />
      <img className="desktop-1-child2" alt="" src="/group-16.svg" />
      <img className="desktop-1-child3" alt="" src="/group-17.svg" />
      <div className="get-news-about-container">
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">
          Get news about articles and updates in your inbox.
        </p>
      </div>
      <div className="newslleter">Newslleter</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="name-formgroup">
          <Form.Label>
            <input
              type="text"
              className={`editable-label ${
                formErrors.name ? "is-invalid" : ""
              }`}
              placeholder="NAME"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <div className="invalid-feedback">{formErrors.name}</div>
            )}
          </Form.Label>
        </Form.Group>
        <Form.Group className="email-formgroup">
          <Form.Label>
            <input
              type="text"
              className={`editable-label ${
                formErrors.email ? "is-invalid" : ""
              }`}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="EMAIL"
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </Form.Label>
        </Form.Group>
        <Form.Group className="message-formgroup">
          <Form.Label>
            <input
              type="text"
              className={`editable-label ${
                formErrors.message ? "is-invalid" : ""
              }`}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="MESSAGE"
            />
            {formErrors.message && (
              <div className="invalid-feedback">{formErrors.message}</div>
            )}
          </Form.Label>
        </Form.Group>
        <button>
          <div className="button">
            <div className="button-child" />
            <div className="send">SEND</div>
          </div>
        </button>
      </Form>
      <img className="arrow-icon" alt="" src="/arrow-1.svg" />
      <img className="desktop-1-child4" alt="" src="/arrow-2.svg" />
      <div className="lorem-ipsum-dolor-container">
        <p className="blank-line">{`GET `}</p>
        <p className="blank-line">IN TOUCH</p>
      </div>
      <div className="desktop-1-child5" />
      <div className="desktop-1-child6" />
      <div className="desktop-1-child7" />

      <div className="frame-parent">
        <div className="frame-group">
          <div className="see-more-wrapper">
            <div className="see-more">See more</div>
          </div>
          <img className="vector-icon7" alt="" src="/vector4.svg" />
        </div>
        <div className="instance-item" />
      </div>

      <ProductList selectedCategory={selectedCategory} />

      <div className="copyright-2022-all">
        Copyright 2022 All Right Reserved By SG
      </div>
    </a>
  );
};

export default Desktop1;
