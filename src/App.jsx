import { useState, useEffect } from 'react';
import Footer from './Component/Footer.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import MainPage from './Component/mainPage.jsx';

function App() {

  const [country, setCountry] = useState("India");
  let [searchCity, setSearchCity] = useState("greater noida");
  let [unit, setUnit] = useState(true);


  return (
    <div className=' w-full overflow-hidden  bg-gradient-to-b from-[#3F3F3F] scroll-smooth'>
      <Navbar setCountry={setCountry} setSearchCity={setSearchCity} setUnit={setUnit} unit={unit} />
      <MainPage country={country} searchCity={searchCity} setSearchCity={setSearchCity} unit={unit}/>
      <Footer />
    </div>
  );
}

export default App;
