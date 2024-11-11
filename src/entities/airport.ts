import {AirportCode, AirportInterface} from "../interfaces/airport.interface";
import {Flight} from "./flight";

export class Airport implements AirportInterface {
    id: number;
    code: AirportCode;
    flight: Flight[];

    constructor(id: number, code: AirportCode, flight: Flight[]) {
        this.id = id;
        this.code = code;
        this.flight = flight;
    }
}