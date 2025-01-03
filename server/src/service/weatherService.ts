import fs from 'node:fs/promises';
import dotenv from 'dotenv';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  id: string;
  city: string;
  state: string;
}

// TODO: Define a class for the Weather object
class Weather {
  name: string;
  id: string;
  weatherData: string;
  currentWeather: string;

  constructor(name: string, id: string, weatherData: string, currentWeather: string ) {
    this.name = name;
    this.id = id;
    this.currentWeather = currentWeather;
    this.weatherData = weatherData;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties

  private baseURL?: string;

  private apiKey?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';

    this.apiKey = process.env.API_KEY || '';
  }

  // TODO: Create fetchLocationData method 
  private async fetchLocationData(query: string) {
    try {
      const response = await fetch(
        `${this.baseURL}https://api.openweathermap.org/data/2.5/weather?q=${query}&api_key=${this.apiKey}`);
        
      const location = await response.json();

      const locationData = await this.destructureLocationData(location.data);
      return locationData;
    } catch (err) {
      console.log('Error:', err);
      return err;
    }
  }
      

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates){
    const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?dt=${locationData}&api_key=${this.apiKey}`;

    fetch(API_BASE_URL)
    .then((response) => response.json())
    }


  
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {}

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {}

  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {}

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {}

  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {}

  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}

  // TODO: Complete getWeatherForCity method
 async getWeatherForCity(city: string) {}

}

export default new WeatherService();
