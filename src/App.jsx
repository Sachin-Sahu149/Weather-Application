import DailyMainPage from './Component/Daily/DailyMainPage.jsx';
import ExpandedView from './Component/Daily/ExpandedView.jsx';
import Footer from './Component/Footer.jsx';
import ExpandedHourly from './Component/Hourly/ExpandedHourly.jsx';
import Hourly from './Component/Hourly/Hourly.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import SearchBar from './Component/Navbar/SearchBar.jsx';
import { CurrentWeather } from './Component/Realtime/CurrentWeather.jsx';
import RedirectTag from './Component/RedirectTag.jsx';

function App() {

  return (
    <div className=' w-full overflow-hidden bg-gray-600'>
      <Navbar />
      <div className='flex flex-col justify-center items-center px-3 ss:px-6 sm:px-12'>
        <RedirectTag />
        <div className='bg-green-300 mb-1 w-full rounded p-1 flex justify-end ss:hidden'>
          <SearchBar display=" flex max-w-[400px] h-[30px]" inputAppearance="rounded-md" buttonAppearance="px-3  rounded-md" />

        </div>
        <CurrentWeather />
        <Hourly />
        <ExpandedHourly />
        <DailyMainPage />
        <ExpandedView />
      </div>
      <Footer />
    </div>
  );
}

export default App;
