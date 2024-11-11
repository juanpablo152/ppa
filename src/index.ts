import {FlightFinder} from "./entities/flight-finder";
import {Airport} from "./entities/airport";
import {AirportCode} from "./interfaces/airport.interface";
import {airportData} from "./data";

let airport: Airport[] = airportData;

console.log('----------------------------------------------------------------------------------------------------------------------------------------');
new FlightFinder(airport).findRoute(AirportCode.BOG, AirportCode.MDE, '2024-11-18');
console.log('----------------------------------------------------------------------------------------------------------------------------------------');
