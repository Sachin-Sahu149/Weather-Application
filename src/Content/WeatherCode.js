// import { clear,cloudy, drizzle, flurries, fog, fogLight, freezingRain, freezingRainDrizzle, 
//   freezingRainHeavy, freezingRainLight, icePelletesHeavy, icePelletesLight, icePellets, mostlyClear, 
//   mostlyCloudy, partlyCloudy, rain, rainHeavy, rainLight, snow, snowHeavy, snowLight, thunderStorm } from "./weatherIcon/index.js";


//   export const weatherCode = {
//     "0": { text: "Clear, Sunny", icon: clear }, // Clear sky
//     "1": { text: "Mostly Clear", icon: mostlyClear },
//     "2": { text: "Partly Cloudy", icon: partlyCloudy },
//     "3": { text: "Mostly Cloudy", icon: mostlyCloudy },
//     "45": { text: "Fog", icon: fog }, // Fog and depositing rime fog
//     "48": { text: "Depositing Rime Fog", icon: rimeFog },
//     "51": { text: "Light Drizzle", icon: drizzleLight }, // Drizzle: Light intensity
//     "53": { text: "Moderate Drizzle", icon: drizzle }, // Drizzle: Moderate intensity
//     "55": { text: "Dense Drizzle", icon: drizzleHeavy }, // Drizzle: Dense intensity
//     "56": { text: "Light Freezing Drizzle", icon: freezingRainDrizzle }, // Freezing Drizzle: Light intensity
//     "57": { text: "Dense Freezing Drizzle", icon: freezingRainDrizzleHeavy }, // Freezing Drizzle: Dense intensity
//     "61": { text: "Slight Rain", icon: rainLight }, // Rain: Slight intensity
//     "63": { text: "Moderate Rain", icon: rain }, // Rain: Moderate intensity
//     "65": { text: "Heavy Rain", icon: rainHeavy }, // Rain: Heavy intensity
//     "66": { text: "Light Freezing Rain", icon: freezingRainLight }, // Freezing Rain: Light intensity
//     "67": { text: "Heavy Freezing Rain", icon: freezingRainHeavy }, // Freezing Rain: Heavy intensity
//     "71": { text: "Light Snowfall", icon: snowLight }, // Snowfall: Slight intensity
//     "73": { text: "Moderate Snowfall", icon: snow }, // Snowfall: Moderate intensity
//     "75": { text: "Heavy Snowfall", icon: snowHeavy }, // Snowfall: Heavy intensity
//     "77": { text: "Snow Grains", icon: snowGrains },
//     "80": { text: "Slight Rain Showers", icon: rainShowerLight }, // Rain showers: Slight intensity
//     "81": { text: "Moderate Rain Showers", icon: rainShower }, // Rain showers: Moderate intensity
//     "82": { text: "Violent Rain Showers", icon: rainShowerHeavy }, // Rain showers: Violent intensity
//     "85": { text: "Slight Snow Showers", icon: snowShowerLight }, // Snow showers: Slight intensity
//     "86": { text: "Heavy Snow Showers", icon: snowShowerHeavy }, // Snow showers: Heavy intensity
//     "95": { text: "Thunderstorm", icon: thunderStorm }, // Thunderstorm: Slight or moderate
//     "96": { text: "Thunderstorm with Slight Hail", icon: thunderStormLightHail },
//     "99": { text: "Thunderstorm with Heavy Hail", icon: thunderStormHeavyHail }
// };

import {
  clear,
  cloudy,
  drizzle,
  flurries,
  fog,
  fogLight,
  freezingRain,
  freezingRainDrizzle,
  freezingRainHeavy,
  freezingRainLight,
  icePelletesHeavy,
  icePelletesLight,
  icePellets,
  mostlyClear,
  mostlyCloudy,
  partlyCloudy,
  rain,
  rainHeavy,
  rainLight,
  snow,
  snowHeavy,
  snowLight,
  thunderStorm
} from "./weatherIcon/index.js";

export const weatherCode = {
  "0": { text: "Clear, Sunny", icon: clear }, // Clear sky
  "1": { text: "Mostly Clear", icon: mostlyClear },
  "2": { text: "Partly Cloudy", icon: partlyCloudy },
  "3": { text: "Mostly Cloudy", icon: mostlyCloudy },
  "45": { text: "Fog", icon: fog }, // Fog and depositing rime fog
  "48": { text: "Light Fog", icon: fogLight },
  "51": { text: "Light Drizzle", icon: drizzle }, // Drizzle: Light intensity
  "53": { text: "Moderate Drizzle", icon: drizzle }, // Drizzle: Moderate intensity
  "55": { text: "Heavy Drizzle", icon: drizzle }, // Drizzle: Dense intensity
  "56": { text: "Freezing Drizzle", icon: freezingRainDrizzle }, // Freezing Drizzle: Light intensity
  "57": { text: "Dense Freezing Drizzle", icon: freezingRainDrizzle }, // Freezing Drizzle: Dense intensity
  "61": { text: "Light Rain", icon: rainLight }, // Rain: Slight intensity
  "63": { text: "Moderate Rain", icon: rain }, // Rain: Moderate intensity
  "65": { text: "Heavy Rain", icon: rainHeavy }, // Rain: Heavy intensity
  "66": { text: "Light Freezing Rain", icon: freezingRainLight }, // Freezing Rain: Light intensity
  "67": { text: "Heavy Freezing Rain", icon: freezingRainHeavy }, // Freezing Rain: Heavy intensity
  "71": { text: "Light Snowfall", icon: snowLight }, // Snowfall: Slight intensity
  "73": { text: "Moderate Snowfall", icon: snow }, // Snowfall: Moderate intensity
  "75": { text: "Heavy Snowfall", icon: snowHeavy }, // Snowfall: Heavy intensity
  "77": { text: "Flurries", icon: flurries }, // Snow grains
  "80": { text: "Light Rain Showers", icon: rainLight }, // Rain showers: Slight intensity
  "81": { text: "Moderate Rain Showers", icon: rain }, // Rain showers: Moderate intensity
  "82": { text: "Heavy Rain Showers", icon: rainHeavy }, // Rain showers: Violent intensity
  "85": { text: "Light Snow Showers", icon: snowLight }, // Snow showers: Slight intensity
  "86": { text: "Heavy Snow Showers", icon: snowHeavy }, // Snow showers: Heavy intensity
  "95": { text: "Thunderstorm", icon: thunderStorm }, // Thunderstorm: Slight or moderate
  "96": { text: "Thunderstorm with Light Hail", icon: thunderStorm }, // Thunderstorm with slight hail
  "99": { text: "Thunderstorm with Heavy Hail", icon: thunderStorm } // Thunderstorm with heavy hail
};
