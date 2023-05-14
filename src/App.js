import React from 'react'

function App() {

  const api ={
    key: "c94ca974d3cd263e08529177cb59bd6a",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  return (

    const dateBuilder = (d)=>{
      console.log("hello world")
    }

    <div className="app">
      <main>
        <div className='search-box'>
          <input
          type='text'
          className='search-bar'
          placeholder='Search...'/>
        </div>
        <div className='loaction-box'>
          <div className='location'>New York City</div>
          <div className='date'>{dateBuilder(new Date)}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
