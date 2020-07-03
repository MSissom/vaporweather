import React from 'react';


const api = {
  key: 'd575760e0f6d07ed96adeb937b2cc465',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
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
      </main>
    </div>
  );
}

//d575760e0f6d07ed96adeb937b2cc465


export default App;
