import React from 'react';


const api = {
  key: 'd575760e0f6d07ed96adeb937b2cc465',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

}

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
          type="text"
          className='search-bar'
          placeholder="Search..."
          />
        </div>
        <div className="location-box">
        <div className="location">NYC, US</div>
        <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

//d575760e0f6d07ed96adeb937b2cc465


export default App;
