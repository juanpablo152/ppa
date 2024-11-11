import {DayOfWeek, FlightInterface} from "../interfaces/flight.interface";
import {AirportCode} from "../interfaces/airport.interface";

export class Flight implements FlightInterface {
    origin: AirportCode;
    destination: AirportCode;
    departureTime: string;
    arrivalTime: string;
    price: number;
    day: DayOfWeek;
    flightDuration: number;

    constructor(origin: AirportCode, destination: AirportCode, departureTime: string, arrivalTime: string, price: number, day: DayOfWeek, flightDuration: number) {
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.price = price;
        this.day = day;
        this.flightDuration = flightDuration;
    }
}