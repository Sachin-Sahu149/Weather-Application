import './App.css'
import DailyMainPage from './Component/Daily/DailyMainPage.jsx';
import Footer from './Component/Footer.jsx';
import Hourly from './Component/Hourly/Hourly.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import { CurrentWeather } from './Component/Realtime/CurrentWeather.jsx';
import RedirectTag from './Component/RedirectTag.jsx';
import Description from './Component/WeatherSummary/Description.jsx';

function App() {

  return (
    <div className=' w-full overflow-hidden bg-gray-600'>
      <Navbar />
      <div className='flex flex-col justify-center items-center px-1 xs:px-12'>
        <p>Render search option</p>
        <RedirectTag />
        <CurrentWeather />
        {/* <Description/> */}
        <Hourly />
        <DailyMainPage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
