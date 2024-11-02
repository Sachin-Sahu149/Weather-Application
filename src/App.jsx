import './App.css'
import DailyMainPage from './Component/Daily/DailyMainPage.jsx';
import Hourly from './Component/Hourly/Hourly.jsx';
// import { dewPoint, Humidity, latitude, longitude, precipitation, Pressure, UVIndex, WeatherIcon, windSpeed } from './assets/index.js';
import Navbar from './Component/Navbar/Navbar.jsx';
import { CurrentWeather } from './Component/Realtime/CurrentWeather.jsx';
import RedirectTag from './Component/RedirectTag.jsx';
import { weatherCode } from './Content/WeatherCode.js';

function App() {

  return (
    <div className=' w-full overflow-hidden bg-gray-600 px-12'>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <p>Render search option</p>
        <RedirectTag />
        <CurrentWeather />
        <Hourly />
        <DailyMainPage/>
      </div>
    </div>
  );
}

export default App;
