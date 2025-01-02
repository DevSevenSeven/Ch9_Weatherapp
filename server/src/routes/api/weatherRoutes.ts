import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req, res) => {
  // TODO: GET weather data from city name
  // TODO: save city to search history
 
  const { city } = req.body;
  if (req.body) {
    WeatherService.getWeatherForCity(city);
    res.json('City added successfully ');
  } else {
    res.send('Error in adding city');
  }
});

// TODO: GET search history
router.get('/history', async (req, res) => {
  HistoryService.getCities();
});


// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {});

export default router;
