import { clear,cloudy, drizzle, flurries, fog, fogLight, freezingRain, freezingRainDrizzle, 
  freezingRainHeavy, freezingRainLight, icePelletesHeavy, icePelletesLight, icePellets, mostlyClear, 
  mostlyCloudy, partlyCloudy, rain, rainHeavy, rainLight, snow, snowHeavy, snowLight, thunderStorm } from "./weatherIcon/index.js";


export const weatherCode = {
    "0": "Unknown",
    "1000": {
      text:"Clear, Sunny",
      icon: clear
    },
    "1100": {
      text:"Mostly Clear",
      icon:mostlyClear,
    },
    "1101": {
      text:"Partly Cloudy",
      icon:partlyCloudy
    },
    "1102": {
      text:"Mostly Cloudy",
      icon:mostlyCloudy
    },
    "1001": {
      text:"Cloudy",
      icon:cloudy
    },
    "2000": {
      text:"Fog",
      icon:fog
    },
    "2100": {
      text:"Light Fog",
      icon:fogLight
    },
    "4000":{
      text: "Drizzle",
      icon:drizzle
    },
    "4001": {
      text:"Rain",
      icon:rain
    },
    "4200": {
      text:"Light Rain",
      icon:rainLight
    },
    "4201": {
      text:"Heavy Rain",
      icon:rainHeavy
    },
    "5000": {
      text:"Snow",
      icon:snow
    },
    "5001": {
      text:"Flurries",
      icon:flurries
    },
    "5100": {
      text:"Light Snow",
      icon:snowLight
    },
    "5101": {
      text:"Heavy Snow",
      icon:snowHeavy
    },
    "6000": {
      text:"Freezing Drizzle",
      icon:freezingRainDrizzle
    },
    "6001": {
      text:"Freezing Rain",
      icon:freezingRain
    },
    "6200": {
      text:"Light Freezing Rain",
      icon:freezingRainLight
    },
    "6201": {
      text:"Heavy Freezing Rain",
      icon:freezingRainHeavy
    },
    "7000": {
      text:"Ice Pellets",
      icon:icePellets
    },
    "7101": {
      text:"Heavy Ice Pellets",
      icon:icePelletesHeavy
    },
    "7102": {
      text:"Light Ice Pellets",
      icon:icePelletesLight
    },
    "8000": {
      text:"Thunderstorm",
      icon:thunderStorm
    }
  };
  