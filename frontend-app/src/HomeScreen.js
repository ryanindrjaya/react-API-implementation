import React from 'react'
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from './Request';
import Row from './Row';

function HomeScreen() {

  return (
    <div className='homeScreen'>
      <Nav />

      <Banner />

      <Row 
        title='Girls series!'
        fetchUrl={requests.girlList}
        isLargeRow
      />
    </div>
  )

}

export default HomeScreen