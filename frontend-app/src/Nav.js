import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <h1 className="nav__logo">Campflix</h1>

        <div className="nav__right-section">
          <p className="nav__username">Ryan Indrajaya</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
