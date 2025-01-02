import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

// TODO: Define a City class with name and id properties

class City {
  cityname: string;
  citystate:string;
  city_id: string;
  
constructor(cityname: string, citystate: string, city_id: string) {
  this.cityname = cityname;
  this.citystate = citystate;
  this.city_id = city_id;
  }
}


// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    return await fs.readFile('db/searchHistory.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    return await fs.writeFile('db/searchHistory.json', JSON.stringify(cities, null, '\t'));
  }

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    return await this.read().then((history) => {
      let parsedHistory: City[];

      // If history isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedHistory = [].concat(JSON.parse(history));
      } catch (err) {
        parsedHistory = [];
      }

      return parsedHistory;
    });

  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(cityname: string, citystate: string) {
    if (!cityname || !citystate) {
      throw new Error('City and State cannot be blank');
  }

   const newCity: City = { cityname: cityname, citystate: citystate, city_id: uuidv4() };

   return await this.getCities()
   .then((cities) => {
     return [...cities, newCity];
   })
   .then((updatedCities) => this.write(updatedCities))
   .then(() => newCity);
}

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    return await this.getCities()
      .then((cities) => cities.filter((cities) => cities.city_id !== id))
      .then((filteredCities) => this.write(filteredCities));
  }
  }


export default new HistoryService();
