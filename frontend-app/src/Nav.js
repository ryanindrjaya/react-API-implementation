import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

  const handleChange = async (e) => {
    console.log(e.target.value);
  }

  const handleClick = (e) => {
    setIsActive(current => !current);
  }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <h1 className="nav__logo">Campflix</h1>

        <div className="nav__right-section">
          <form className="nav__search">
            <input className={`nav__searchBar ${isActive ? 'toggle' : ''}`} onChange={handleChange} />
            <img onClick={handleClick} class="nav__searchIcon" src="https://icon-library.com/images/white-search-icon-png/white-search-icon-png-19.jpg" alt=""></img>
          </form>
          <p className="nav__username">Ryan Indrajaya</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
