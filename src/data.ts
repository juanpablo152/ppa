import {Airport} from "./entities/airport";
import {AirportCode} from "./interfaces/airport.interface";
import {Flight} from "./entities/flight";
import {DayOfWeek} from "./interfaces/flight.interface";

export const airportData: Airport[] = [
    new Airport(1, AirportCode.BOG, [
        new Flight(AirportCode.BOG, AirportCode.MDE, '10:00', '11:00', 100000, DayOfWeek.MONDAY, 60),
        new Flight(AirportCode.BOG, AirportCode.BAQ, '12:00', '13:30', 130000, DayOfWeek.TUESDAY, 90),
        new Flight(AirportCode.BOG, AirportCode.BGA, '14:00', '14:30', 90000, DayOfWeek.WEDNESDAY, 30),
        new Flight(AirportCode.BOG, AirportCode.BGA, '14:00', '14:30', 90000, DayOfWeek.MONDAY, 30),
        new Flight(AirportCode.BOG, AirportCode.SMR, '14:00', '14:30', 110000, DayOfWeek.THURSDAY, 90)
    ]),
    new Airport(2, AirportCode.MDE, [
        new Flight(AirportCode.MDE, AirportCode.CTG, '13:00', '13:50', 80000, DayOfWeek.MONDAY, 50),
        new Flight(AirportCode.MDE, AirportCode.CLO, '16:00', '16:40', 90000, DayOfWeek.WEDNESDAY, 40),
        new Flight(AirportCode.MDE, AirportCode.EOH, '18:00', '17:00', 90000, DayOfWeek.THURSDAY, 60),
    ]),
    new Airport(3, AirportCode.BAQ, [
        new Flight(AirportCode.BAQ, AirportCode.BOG, '07:00', '08:30', 130000, DayOfWeek.MONDAY, 90),
        new Flight(AirportCode.BAQ, AirportCode.MDE, '09:00', '10:00', 120000, DayOfWeek.TUESDAY, 60),
        new Flight(AirportCode.BAQ, AirportCode.BGA, '11:00', '11:30', 90000, DayOfWeek.WEDNESDAY, 30),
    ]),
    new Airport(4, AirportCode.BGA, [
        new Flight(AirportCode.BGA, AirportCode.BOG, '19:00', '19:30', 90000, DayOfWeek.SUNDAY, 30),
        new Flight(AirportCode.BGA, AirportCode.MDE, '21:00', '22:00', 100000, DayOfWeek.MONDAY, 60),
        new Flight(AirportCode.BGA, AirportCode.BAQ, '23:00', '00:30', 110000, DayOfWeek.TUESDAY, 90),
    ]),
    new Airport(5, AirportCode.SMR, [
        new Flight(AirportCode.SMR, AirportCode.BOG, '06:00', '07:30', 120000, DayOfWeek.WEDNESDAY, 90),
        new Flight(AirportCode.SMR, AirportCode.MDE, '08:00', '09:00', 110000, DayOfWeek.THURSDAY, 60),
        new Flight(AirportCode.SMR, AirportCode.BAQ, '10:00', '11:30', 130000, DayOfWeek.FRIDAY, 90),
    ]),
    new Airport(6, AirportCode.CTG, [
        new Flight(AirportCode.CTG, AirportCode.CLO, '12:00', '14:00', 140000, DayOfWeek.SATURDAY, 120),
        new Flight(AirportCode.CTG, AirportCode.MDE, '14:00', '15:00', 120000, DayOfWeek.SUNDAY, 60),
        new Flight(AirportCode.CTG, AirportCode.EOH, '16:00', '17:30', 150000, DayOfWeek.MONDAY, 90),
    ]),
    new Airport(7, AirportCode.CLO, [
        new Flight(AirportCode.CLO, AirportCode.SMR, '18:30', '19:00', 160000, DayOfWeek.TUESDAY, 30),
        new Flight(AirportCode.CLO, AirportCode.BGA, '20:00', '21:00', 130000, DayOfWeek.WEDNESDAY, 60),
        new Flight(AirportCode.CLO, AirportCode.BAQ, '22:00', '23:30', 170000, DayOfWeek.THURSDAY, 90),
    ]),
    new Airport(8, AirportCode.EOH, [
        new Flight(AirportCode.EOH, AirportCode.BOG, '00:00', '01:30', 180000, DayOfWeek.FRIDAY, 90),
        new Flight(AirportCode.EOH, AirportCode.SMR, '02:00', '03:00', 140000, DayOfWeek.SATURDAY, 60),
        new Flight(AirportCode.EOH, AirportCode.BAQ, '04:00', '05:30', 190000, DayOfWeek.SUNDAY, 90),
    ])
];
