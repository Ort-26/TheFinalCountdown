import { GetNextQuincena,GetNextHoraSalida } from '../Utils/DateHandler';
import {today} from './Constants'

const RelojQuincena = {
        title: 'Proxima Quincena',
        targetDate: GetNextQuincena(today)
    }

const RelojUtilidades2023 = {
        title: 'Utilidades 2023',
        targetDate: new Date ("2023-5-15 03:00:00")
    }

const EndOfSprint = {
    title: "Tiempo restante de sprint centro ***390",
    targetDate: new Date ("2023-4-21 18:30:00")
}

const EndOfProject = {
    title: "Tiempo restante para entrega de proyecto",
    targetDate: new Date ("2023-4-28 18:30:00")
}

const NextSalida = {
    title: "Tiempo restante para salir",
    targetDate: GetNextHoraSalida(today)
}
const Aguinaldo = {
    title: "Aguinaldo 2023",
    targetDate: new Date ("2023-11-15 03:00:00")
}


export const FechasAMostrar = [RelojQuincena,NextSalida,RelojUtilidades2023,EndOfSprint,EndOfProject,Aguinaldo]