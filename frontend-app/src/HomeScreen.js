import React, { useState } from 'react'
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';

function HomeScreen() {
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState('girls');

  if (search === null || search === undefined || search === '') {
    setSearch('girls');
  }

  const handleChange = async (e) => {
    setSearch(e.target.value);
  }

  const handleClick = (e) => {
    setIsActive(current => !current);
  }

  return (
    <div className='homeScreen'>
      <Nav />

      <form className="nav__search">
        <input className={`nav__searchBar ${isActive ? 'toggle' : ''}`} onChange={handleChange} />
        <img onClick={handleClick} className="nav__searchIcon" src="https://icon-library.com/images/white-search-icon-png/white-search-icon-png-19.jpg" alt=""></img>
      </form>


      <Banner />

      <Row 
        title='Television series'
        fetchUrl={`/search/shows?q=${search}`}
      />
    </div>
  )

}

export default HomeScreen