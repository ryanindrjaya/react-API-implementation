import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState();
  let searchQuery = {
    query: '',
  };

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
    setSearch(e.target.value);
  }

  const handleClick = (e) => {
    setIsActive(current => !current);
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      searchQuery.query = search;

    } catch (error) {
      console.log(error, 'Error when handling submit')
    }
  }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <h1 className="nav__logo">Campflix</h1>

        <div className="nav__right-section">
          <form className="nav__search" onSubmit={handleSubmit}>
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
