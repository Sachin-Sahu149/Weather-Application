import { useState, useEffect } from 'react';
import React from 'react';
import DailyMainPage from './Daily/DailyMainPage.jsx';
import ExpandedView from './Daily/ExpandedView.jsx';
import ExpandedHourly from './Hourly/ExpandedHourly.jsx';
import Hourly from './Hourly/Hourly.jsx';
import SearchBar from './Navbar/SearchBar.jsx';
import { CurrentWeather } from './Realtime/CurrentWeather.jsx';
import RedirectTag from './RedirectTag.jsx';
import ErrorPage from './ErrorPage.jsx';
// import DailyMainPage from "./Daily/DailyMainPage";

export default function MainPage({ country, unit, searchCity, setSearchCity }) {
    const apiKey = import.meta.env.VITE_API_KEY;

    let [hourlyVisible, setHourlyVisible] = useState(false);
    let [dailyVisible, setDailyVisible] = useState(false);

    let [coordinate, setCoordinate] = useState({
        lat: 28.4670734,
        lon: 77.5137649,
        address: "Greater Noida, Gautam Buddha Nagar, Gautam Buddha Nagar District, Uttar Pradesh, 201310, India",
    })
    let[isError,setIsError] = useState(false);

    useEffect(() => {
        console.log(apiKey);
        const fetchData = async () => {
            try {
                const response = await fetch(`https://geocode.maps.co/search?q=${searchCity},${country}&api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                if (json.length != 0) {
                    setCoordinate(prevData => ({
                        ...prevData,
                        lat: json[0].lat,
                        lon: json[0].lon,
                        address: json[0].display_name
                    }))
                } else setIsError(true);

            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, [searchCity])


    let [weatherData, setWeatherData] = useState({
        current: {
            apparent_temperature: 27.9,
            interval: 900,
            is_day: 0,
            precipitation: 0,
            pressure_msl: 1013.2,
            rain: 0,
            relative_humidity_2m: 73,
            snowfall: 0,
            surface_pressure: 990.5,
            temperature_2m: 24.7,
            time: "2024-11-08T18:45",
            weather_code: 0,
            wind_direction_10m: 111,
            wind_gusts_10m: 4.3,
            wind_speed_10m: 3.1,
        },
        daily: {
            sunrise: ['2024-11-08T06:37'],
            sunset: ['2024-11-08T17:30'],
            temperature_2m_max: [29.9],
            temperature_2m_min: [18],
            time: ['2024-11-08'],
            uv_index_max: [4.55],
        },
        hourly: {
            dew_point_2m: [18.7, 18.6, 18.2, 17.9, 17.5, 17.4, 17.3, 17.7, 19.6, 20.1, 20.6, 20.3, 20, 19.4, 19, 18.7, 18.7, 19.9, 19.7, 19.4, 19.2, 18.8, 18.5, 18.2],
            time: [
                "2024-11-08T00:00",
                "2024-11-08T01:00",
                "2024-11-08T02:00",
                "2024-11-08T03:00",
                "2024-11-08T04:00",
                "2024-11-08T05:00",
                "2024-11-08T06:00",
                "2024-11-08T07:00",
                "2024-11-08T08:00",
                "2024-11-08T09:00",
                "2024-11-08T10:00",
                "2024-11-08T11:00",
                "2024-11-08T12:00",
                "2024-11-08T13:00",
                "2024-11-08T14:00",
                "2024-11-08T15:00",
                "2024-11-08T16:00",
                "2024-11-08T17:00",
                "2024-11-08T18:00",
                "2024-11-08T19:00",
                "2024-11-08T20:00",
                "2024-11-08T21:00",
                "2024-11-08T22:00",
                "2024-11-08T23:00"
            ]
        }
    })

    let [hourlyWeatherData, setHourlyWeatherData] = useState({
        hourlyData: {
            time: [
                "2024-11-08T00:00",
                "2024-11-08T01:00",
                "2024-11-08T02:00",
                "2024-11-08T03:00",
                "2024-11-08T04:00",
                "2024-11-08T05:00",
                "2024-11-08T06:00",
                "2024-11-08T07:00",
                "2024-11-08T08:00",
                "2024-11-08T09:00",
                "2024-11-08T10:00",
                "2024-11-08T11:00",
                "2024-11-08T12:00",
                "2024-11-08T13:00",
                "2024-11-08T14:00",
                "2024-11-08T15:00",
                "2024-11-08T16:00",
                "2024-11-08T17:00",
                "2024-11-08T18:00",
                "2024-11-08T19:00",
                "2024-11-08T20:00",
                "2024-11-08T21:00",
                "2024-11-08T22:00",
                "2024-11-08T23:00"
            ],
            temperature_2m: [
                4.3,
                4.6,
                4.6,
                4.6,
                4.6,
                4.7,
                4.6,
                4.6,
                4.5,
                4.6,
                5.0,
                5.3,
                5.8,
                5.8,
                6.0,
                5.9,
                5.9,
                5.5,
                5.3,
                5.2,
                5.1,
                4.9,
                4.5,
                4.3
            ],
            relative_humidity_2m: [
                87,
                90,
                89,
                89,
                88,
                88,
                90,
                86,
                81,
                78,
                78,
                78,
                77,
                80,
                80,
                80,
                81,
                83,
                84,
                86,
                86,
                86,
                88,
                91
            ],
            dew_point_2m: [
                2.3,
                3.1,
                2.9,
                2.9,
                2.8,
                2.9,
                3.1,
                2.5,
                1.6,
                1.1,
                1.5,
                1.8,
                2.1,
                2.6,
                2.8,
                2.8,
                2.9,
                2.8,
                2.8,
                3.0,
                2.9,
                2.8,
                2.7,
                3.0
            ],
            apparent_temperature: [
                1.5,
                2.3,
                2.1,
                2.1,
                2.2,
                2.2,
                1.9,
                1.6,
                1.0,
                0.8,
                1.6,
                1.7,
                2.3,
                2.4,
                2.6,
                2.6,
                2.5,
                2.2,
                2.0,
                1.8,
                1.7,
                1.3,
                1.0,
                1.0
            ],
            precipitation_probability: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            snowfall: [
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00
            ],
            weather_code: [
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                2,
                2
            ],
            surface_pressure: [
                1030.9,
                1030.5,
                1030.4,
                1029.9,
                1029.5,
                1029.7,
                1029.5,
                1029.7,
                1029.6,
                1029.5,
                1028.6,
                1029.3,
                1028.7,
                1028.0,
                1027.9,
                1027.6,
                1027.2,
                1027.4,
                1027.0,
                1027.1,
                1027.1,
                1027.2,
                1026.9,
                1026.6
            ],
            cloud_cover: [
                100,
                100,
                100,
                100,
                100,
                100,
                96,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                97,
                99,
                100,
                100,
                76,
                67
            ],
            visibility: [
                12860.00,
                9240.00,
                9860.00,
                9860.00,
                12940.00,
                12320.00,
                9600.00,
                15920.00,
                28100.00,
                32320.00,
                30940.00,
                31860.00,
                31420.00,
                24680.00,
                27340.00,
                27040.00,
                26260.00,
                22060.00,
                19720.00,
                16940.00,
                16340.00,
                15600.00,
                12520.00,
                8840.00
            ],
            wind_speed_10m: [
                7.1,
                4.8,
                6.2,
                5.6,
                5.6,
                5.8,
                7.6,
                8.7,
                11.6,
                13.0,
                11.0,
                12.2,
                11.9,
                11.5,
                12.2,
                11.7,
                12.1,
                11.7,
                11.5,
                12.4,
                12.4,
                13.4,
                12.9,
                11.4
            ],
            wind_direction_10m: [
                114,
                103,
                97,
                117,
                105,
                83,
                85,
                95,
                106,
                96,
                79,
                88,
                95,
                94,
                90,
                101,
                102,
                99,
                94,
                98,
                98,
                104,
                103,
                103
            ],
            wind_gusts_10m: [
                16.2,
                14.4,
                13.3,
                13.0,
                13.3,
                11.9,
                15.5,
                17.6,
                24.8,
                27.4,
                28.4,
                27.4,
                26.6,
                27.0,
                27.7,
                28.8,
                27.0,
                26.6,
                25.2,
                26.3,
                27.0,
                29.2,
                29.5,
                27.0
            ]
        }
    })

    let [forecastData, setForecastData] = useState({
        daily: {
            time: [
                "2024-11-08",
                "2024-11-09",
                "2024-11-10",
                "2024-11-11",
                "2024-11-12",
                "2024-11-13",
                "2024-11-14",
                "2024-11-15",
                "2024-11-16",
                "2024-11-17",
                "2024-11-18",
                "2024-11-19",
                "2024-11-20",
                "2024-11-21",
                "2024-11-22",
                "2024-11-23"
            ],
            weather_code: [
                3,
                3,
                45,
                61,
                45,
                61,
                3,
                45,
                45,
                3,
                2,
                51,
                51,
                71,
                51,
                3
            ],
            temperature_2m_max: [
                6.0,
                7.6,
                4.7,
                7.7,
                6.8,
                5.0,
                4.6,
                4.9,
                8.3,
                9.9,
                8.1,
                5.5,
                3.7,
                1.4,
                6.8,
                4.6
            ],
            temperature_2m_min: [
                4.1,
                2.7,
                0.9,
                2.8,
                2.4,
                0.3,
                1.2,
                -0.4,
                3.5,
                5.3,
                4.6,
                3.1,
                0.3,
                -1.7,
                1.7,
                3.7
            ],
            apparent_temperature_max: [
                2.6,
                5.0,
                2.8,
                5.8,
                4.7,
                2.9,
                2.2,
                2.7,
                5.1,
                6.6,
                4.6,
                3.0,
                0.1,
                -3.3,
                3.6,
                0.9
            ],
            apparent_temperature_min: [
                0.7,
                -0.0,
                -1.9,
                0.8,
                0.1,
                -2.4,
                -1.3,
                -3.1,
                0.5,
                2.2,
                -0.2,
                -1.4,
                -3.0,
                -6.5,
                -5.3,
                -0.9
            ],
            sunrise: [
                "2024-11-08T07:16",
                "2024-11-09T07:18",
                "2024-11-10T07:20",
                "2024-11-11T07:21",
                "2024-11-12T07:23",
                "2024-11-13T07:25",
                "2024-11-14T07:27",
                "2024-11-15T07:29",
                "2024-11-16T07:30",
                "2024-11-17T07:32",
                "2024-11-18T07:34",
                "2024-11-19T07:36",
                "2024-11-20T07:37",
                "2024-11-21T07:39",
                "2024-11-22T07:41",
                "2024-11-23T07:42"
            ],
            sunset: [
                "2024-11-08T16:23",
                "2024-11-09T16:22",
                "2024-11-10T16:20",
                "2024-11-11T16:18",
                "2024-11-12T16:17",
                "2024-11-13T16:15",
                "2024-11-14T16:14",
                "2024-11-15T16:12",
                "2024-11-16T16:11",
                "2024-11-17T16:10",
                "2024-11-18T16:08",
                "2024-11-19T16:07",
                "2024-11-20T16:06",
                "2024-11-21T16:05",
                "2024-11-22T16:03",
                "2024-11-23T16:02"
            ],
            uv_index_max: [
                1.70,
                1.70,
                1.70,
                0.60,
                1.60,
                1.45,
                0.30,
                1.45,
                1.40,
                0.60,
                0.70,
                1.00,
                0.15,
                1.25,
                0.70,
                0.95
            ],
            precipitation_probability_max: [
                0,
                0,
                0,
                60,
                15,
                13,
                10,
                14,
                24,
                19,
                24,
                17,
                23,
                32,
                20,
                32
            ],
            wind_speed_10m_max: [
                14.1,
                11.9,
                6.6,
                6.9,
                9.1,
                4.0,
                5.4,
                4.5,
                9.7,
                17.3,
                17.1,
                15.0,
                20.1,
                34.9,
                32.1,
                16.8
            ],
            wind_gusts_10m_max: [
                31.0,
                26.3,
                14.4,
                18.4,
                23.0,
                9.7,
                15.1,
                13.0,
                31.0,
                43.6,
                35.3,
                21.2,
                38.5,
                57.2,
                53.6,
                27.4
            ],
            wind_direction_10m_dominant: [
                97,
                105,
                119,
                177,
                67,
                3,
                184,
                202,
                207,
                154,
                85,
                75,
                307,
                236,
                245,
                78
            ]
        }
    });

    useEffect(() => {

        const fetchData = async () => {
            try {
                const dataResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinate.lat}&longitude=${coordinate.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,snowfall,weather_code,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=dew_point_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto&forecast_days=1`)
                if (!dataResponse.ok) {
                    throw new Error("API is not responding");
                }
                const dataJson = await dataResponse.json();
                if (!dataJson.error) {
                    setWeatherData(prev => ({
                        ...prev,
                        current: dataJson.current,
                        daily: dataJson.daily,
                        hourly: dataJson.hourly
                    }))
                }


                const hourlyResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinate.lat}&longitude=${coordinate.lon}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,snowfall,weather_code,surface_pressure,cloud_cover,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto&forecast_days=1`)
                if (!hourlyResponse.ok) {
                    throw new Error("API is not responding");
                }
                const dataJson2 = await hourlyResponse.json();
                if (!dataJson2.error) {
                    setHourlyWeatherData(prev => ({
                        ...prev,
                        hourlyData: dataJson2.hourly
                    }))
                }
                console.log(dataJson2.hourly);

                // forecast data 
                const dailyForecastResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinate.lat}&longitude=${coordinate.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&timezone=auto&forecast_days=16`);
                if (!dailyForecastResponse.ok) {
                    throw new Error("API is not responding")
                }
                const dataJson3 = await dailyForecastResponse.json();
                if (!dailyForecastResponse.error) {
                    setForecastData((prevData) => ({
                        ...prevData,
                        daily: dataJson3.daily
                    }))
                }
                console.log(dataJson3)
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
        console.log(coordinate);
    }, [coordinate])


    return (
        <div className='flex flex-col justify-center items-center px-3 ss:px-6 sm:px-12'>
            {isError && <ErrorPage/>}
            <RedirectTag setSearchCity={setSearchCity} />
            <div className='mb-1 w-full rounded p-1 flex justify-end ss:hidden'>
                <SearchBar setSearchCity={setSearchCity} display=" flex max-w-[400px] h-[30px]" inputAppearance="rounded-md" buttonAppearance="px-3  rounded-md" />
                {isError && <p className='text-[9px] vs:text-[14px] '>Check spelling mistakes or enter correct area name</p>}
            </div>
            <CurrentWeather weatherInfo={weatherData} unit={unit} coordinate={coordinate} />
            <div className='  bg-[#646567]  flex-1 flex  items-center w-full sm:w-[700px] rounded-lg p-2 mb-6  font-poppins text-[9px] vs:text-[14px] ss:text-[17px] leading-[] vs:leading-6 xs:font-normal text-slate-100'>
                <p className='text-left'>Location:-{coordinate.address} </p>
            </div>
            <Hourly value={hourlyVisible} setHourlyVisible={setHourlyVisible} unit={unit} hourlyWeatherData={hourlyWeatherData} />
            {hourlyVisible && <ExpandedHourly hourlyWeatherData={hourlyWeatherData} unit={unit} />}
            <DailyMainPage value={dailyVisible} setDailyVisible={setDailyVisible} forecastData={forecastData} unit={unit} />
            {dailyVisible && <ExpandedView forecastData={forecastData} unit={unit} />}
        </div>
    );
}