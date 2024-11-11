import {AirportCode} from "./airport.interface";

export interface FlightInterface {
    origin: AirportCode;
    destination: AirportCode;
    departureTime: string;
    arrivalTime: string;
    price: number;
    day: DayOfWeek;
    flightDuration: number;
}

export enum DayOfWeek {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
}

export const DayOfWeekStringSpanish: { [k: number]: string } = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}