import React, { useState } from 'react'
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from './Request';
import Row from './Row';

function HomeScreen() {
  const [data, setData] = useState();

  return (
    <div className='homeScreen'>
      <Nav />

      <Banner />

      <Row 
        title='Girls series!'
        fetchUrl={requests.movieList}
      />
    </div>
  )

}

export default HomeScreen