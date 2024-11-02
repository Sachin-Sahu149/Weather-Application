import './App.css'
import { dewPoint, Humidity, latitude, longitude, precipitation, Pressure, UVIndex, WeatherIcon, windSpeed } from './assets/index.js';
import Navbar from './Component/Navbar/Navbar.jsx';
import { weatherCode } from './Content/WeatherCode.js';

function App() {

  return (
    <div className=' w-full overflow-hidden bg-gray-600 px-12'>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <p>Render search option</p>
        <div className=' shrink h-[40px] mb-4 rounded-lg w-[600px] px-6 bg-gray-200 text-zinc-600 flex justify-center items-center justify-between text-[0.9rem] font-poppins font-semibold'>
          <span className='hover:text-[0.93rem] cursor-pointer bg-sky-300 bg-transparent'>Today</span>
          <span className='hover:text-[0.93rem] cursor-pointer'>Hourly</span>
          <span className='hover:text-[0.93rem] cursor-pointer'>Daily</span>
          {/* <span className='hover:text-[0.93rem] cursor-pointer'>MinuteCast</span>
          <span className='hover:text-[0.93rem] cursor-pointer'>Monthly</span> */}
        </div>
        <div className='flex flex-col  justify-between w-[700px] h-[400px] p-2 bg-green-300 font-poppins text-slate-600'>
          <div className='h-[40%] bg-pink-200 flex'>
            <div className='bg-blue-200 w-1/2 flex flex-col justify-between p-4'>
              <div className='flex justify-between'>
                <span>Friday 1 November 2024</span>
                <img className='' src={weatherCode[6200].icon} alt="" height="30" width="30" />
              </div>
              <div className='flex justify-between items-center mb-4'>
                <div> {weatherCode[6200].text}</div>
                <div className='text-5xl font-semibold'> 29&deg;C</div>
              </div>
            </div>
            <div className='flex flex-col w-1/2 p-4'>
              <div className='flex justify-between pb-4'>
                <div>
                  <div className='flex justify-center items-center'>
                    <img src="https://cf-img-a-in.tosshub.com/sites/weather/resources/image/temp_min.svg" alt="min" height="20" width="20" className='mr-2'/>
                    <span>31&deg;C</span>
                  </div>
                  <span>Min-Temp</span>
                </div>
                <div>
                  <div className='flex justify-center items-center'>
                    <img src="https://cf-img-a-in.tosshub.com/sites/weather/resources/image/temp_max.svg" alt="max" height="20" width="20" className='mr-2' />
                    <span>21&deg;C</span>
                  </div>
                  <span>Max-Temp</span>
                </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <div className='flex justify-center items-center'>
                    <img src="https://cf-img-a-in.tosshub.com/sites/weather/resources/image/sunrise.svg" alt="rise" height="25" width="25" className='mr-2' />
                    <span>06:11 am</span>
                  </div>
                  <span>Sunrise</span>
                </div>
                <div>
                  <div className='flex justify-center items-center'>
                    <img src="https://cf-img-a-in.tosshub.com/sites/weather/resources/image/sunset.svg" alt="set" height="25" width="25" className='mr-2' />
                    <span>05:45 pm</span>
                  </div>
                  <span>Sunset</span>
                </div>
              </div>
            </div>
          </div>

          <div className='h-[30%] flex justify-between'>
            <div className='flex w-1/2 justify-between p-4 mr-14'>
              <div>
                <div className='flex justify-center items-center'>
                  <img src={Humidity} alt="humdity" height="30" width="30" className='mr-2' />
                  <span>35%</span>
                </div>
                <span>Humidity</span>
              </div>
              <div>
                <div className='flex justify-center items-center'>
                  <img src={Pressure} alt="pressure" height="30" width="30" className='mr-2' />
                  <span> 342 paskal</span>
                </div>
                <span>Pressure</span>
              </div>
            </div>
            <div className='flex w-1/2 justify-between p-4'>
              <div>
                <div className='flex justify-center items-center'>
                  <img src={longitude} alt="Longitude" height="30" width="30" className='mr-2' />
                  <span>23.55334</span>
                </div>
                <span>Longitude</span>
              </div>
              <div>
                <div className='flex justify-center items-center'>
                  <img src={latitude} alt="Longitude" height="30" width="30" className='mr-2' />
                  <span>45.77565</span>
                </div>
                <span>Latitude</span>
              </div>
            </div>
          </div>
          <div className='h-[30%] flex'>
            <div className='flex w-1/2 justify-between p-4 items-center mr-14'>
              <div>
                <div className='flex justify-center items-center'>
                  <img src={windSpeed} alt="Wind Speed" height="30" width="30" className='mr-2' />
                  <span>29.6 km/h</span>
                </div>
                <span>Wind Speed</span>
              </div>
              <div>
                <div className='flex justify-center items-center'>
                  <img src={dewPoint} alt="DewPoint" height="30" width="30" className='mr-2' />
                  <span>342.32</span>
                </div>
                <span>Dew point</span>
              </div>
            </div>
            <div className='flex w-1/2 justify-between p-4 items-center'>
              <div>
                <div className='flex justify-center items-center'>
                <img src={precipitation} alt="Precipitaion" height="30" width="30" className='mr-2' />
                  <span>79%</span>
                </div>
                <span>Precipitation</span>
              </div>
              <div>
                <div className='flex justify-center items-center'>
                <img src={UVIndex} alt="" height="30" width="30" className='mr-2' />
                  <span>9</span>
                </div>
                <span>UV Index</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          To show forecast data
          <div>
            first data
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
