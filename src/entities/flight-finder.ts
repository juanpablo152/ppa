import {AirportCode} from "../interfaces/airport.interface";
import {Flight} from "./flight";
import {Airport} from "./airport";
import {AirportFlightInterface, FlightFinderInterface, OrganizedFlight} from "../interfaces/flight-finder.interface";
import {DayOfWeekStringSpanish} from "../interfaces/flight.interface";

export class FlightFinder implements FlightFinderInterface {

    constructor(private airport: Airport[]) {
    }

    /*
    * @param from: AirportCode
    * @param to: AirportCode
    * @param date: string
    * This method receives the origin airport, destination airport and date of the flight.
    * Find the direct flights between the origin and destination airport and the flights with stopover.
    * The method will organize the data and print the results in the console.
     */
    findRoute(from: AirportCode, to: AirportCode, date: string) {
        const [year, month, day] = date.split('-').map(Number);
        const flightDate = new Date(Date.UTC(year, month - 1, day + 1));
        const flights = (this.airport.filter((airport) => airport.code === from)
            .map((airport) => airport.flight.filter((flight) =>
                flight.origin === from && flight.destination === to && flight.day === flightDate.getDay())))
            .reduce((actual, val) => actual.concat(val), []);
        const flightsStopover = this.findRouteStopover(from, to, date);
        this.organizeData(flights, flightsStopover);
    }

    /*
    * @param from: AirportCode
    * @param to: AirportCode
    * @param date: string
    * This method receives the origin airport, destination airport and date of the flight.
    * Find all the flights with stopover between the origin and destination airport.
    * The method will return an array with the flights with stopover.
    * The method will return an empty array if there are no flights with stopover.
     */
    findRouteStopover(from: AirportCode, to: AirportCode, date: string): AirportFlightInterface[] {
        let res: AirportFlightInterface[] = [];
        const [year, month, day] = date.split('-').map(Number);
        const flightDate = new Date(Date.UTC(year, month - 1, day + 1));
        const flights = this.airport.filter((airport) =>
            airport.flight.some((flight) => flight.destination === to && flight.day === flightDate.getDay() && airport.code !== from));
        const airportFound = this.airport.find((airport) => airport.code === from);
        if (airportFound) {
            res = flights.map(airport => {
                return {
                    from: {
                        ...airportFound,
                        flight: airportFound.flight.filter((flight) =>
                            flight.destination === airport.code && flight.day === flightDate.getDay())
                    },
                    to: {
                        ...airport,
                        flight: airport.flight.filter((flight) =>
                            flight.destination === to && flight.day === flightDate.getDay())
                    }
                }
            });
        }
        return res;
    }

    /*
    * @param flight: Flight[]
    * @param flights: AirportFlightInterface[]
    * This method receives the direct flights and the flights with stopover.
    * The method will organize the data and print the results in the console.
     */
    organizeData(flight: Flight[], flights: AirportFlightInterface[]) {
        let res: OrganizedFlight[] = [];
        res = res.concat(flight.map((flight) => {
            return {
                origin: flight.origin,
                destination: [flight.destination],
                day: [flight.day],
                departureTime: [flight.departureTime],
                arrivalTime: [flight.arrivalTime],
                nextOrigin: '',
                nextDestination: [''],
                nextDepartureTime: [''],
                nextArrivalTime: [''],
                totalPrice: flight.price,
                flightDuration: flight.flightDuration
            }
        }));
        res = res.concat(flights.map((flight) => {
            return {
                origin: flight.from.code,
                destination: flight.from.flight.map((f) => f.destination),
                day: flight.from.flight.map((f) => f.day),
                departureTime: flight.from.flight.map((f) => f.departureTime),
                arrivalTime: flight.from.flight.map((f) => f.arrivalTime),
                nextOrigin: flight.to.code,
                nextDestination: flight.to.flight.map((f) => f.destination),
                nextDepartureTime: flight.to.flight.map((f) => f.departureTime),
                nextArrivalTime: flight.to.flight.map((f) => f.arrivalTime),
                totalPrice: flight.from.flight.map((f) => f.price).reduce((a, b) => a + b) + flight.to.flight.map((f) => f.price).reduce((a, b) => a + b),
                flightDuration: flight.from.flight.map((f) => f.flightDuration).reduce((a, b) => a + b) + flight.to.flight.map((f) => f.flightDuration).reduce((a, b) => a + b)
            }
        }));
        res.sort((a, b) => a.flightDuration - b.flightDuration);
        const headers = [
            'Origen', 'Destino', 'Día', 'Hora Salida', 'Hora Llegada',
            'Escala Origen', 'Escala Destino', 'Próxima Hora Salida',
            'Próxima Hora Llegada', 'Precio Total', 'Duración total'
        ];
        const colWidths = [6, 7, 5, 14, 15, 15, 15, 25, 20, 15, 20];
        const headerRow = headers.map((header, i) => header.padEnd(colWidths[i])).join(' | ');
        console.log(headerRow);
        res.forEach((flight) => {
            const row = [
                flight.origin.padEnd(colWidths[0]),
                flight.destination[0].padEnd(colWidths[1]),
                DayOfWeekStringSpanish[flight.day[0]].toString().padEnd(colWidths[2]),
                flight.departureTime[0].padEnd(colWidths[3]),
                flight.arrivalTime[0].padEnd(colWidths[4]),
                flight.nextOrigin.padEnd(colWidths[5]),
                flight.nextDestination[0].padEnd(colWidths[6]),
                flight.nextDepartureTime[0].padEnd(colWidths[7]),
                flight.nextArrivalTime[0].padEnd(colWidths[8]),
                flight.totalPrice.toString().padEnd(colWidths[9]),
                (flight.flightDuration.toString() + ' Minutos').padEnd(colWidths[10])
            ].join(' | ');
            console.log(row);
        });
    }
}