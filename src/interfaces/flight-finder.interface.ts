import {Airport} from "../entities/airport";

export interface FlightFinderInterface {
    findRoute(from: string, to: string, date: string): void;
    findRouteStopover(from: string, to: string, date: string): AirportFlightInterface[];
}

export interface AirportFlightInterface {
    from: Airport;
    to: Airport;
}

export interface OrganizedFlight {
    origin: string;
    destination: string[];
    day: number[];
    departureTime: string[];
    arrivalTime: string[];
    nextOrigin: string;
    nextDestination: string[];
    nextDepartureTime: string[];
    nextArrivalTime: string[];
    totalPrice: number;
    flightDuration: number;
}