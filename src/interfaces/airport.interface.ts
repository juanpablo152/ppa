import {Flight} from "../entities/flight";

export interface AirportInterface {
    id: number;
    code: AirportCode;
    flight: Flight[];
}

export enum AirportCode {
    BOG = 'BOG',
    MDE = 'MDE',
    BAQ = 'BAQ',
    BGA = 'BGA',
    SMR = 'SMR',
    CTG = 'CTG',
    CLO = 'CLO',
    EOH = 'EOH',
}