import { GetNextQuincena,GetNextHoraSalida } from '../Utils/DateHandler';
import {today} from './Constants'

const DefaultEndMessage = "Completado"
const RelojQuincena = {
        title: 'Proxima Quincena',
        targetDate: GetNextQuincena(today),
        EndMessage: DefaultEndMessage
    }

const RelojUtilidades2023 = {
        title: 'Utilidades 2024',
        targetDate: new Date ("2024-5-15 03:00:00").getTime(),
        EndMessage: DefaultEndMessage
    }

// const EndOfSprint = {
//     title: "Tiempo restante de sprint centro ***390",
//     targetDate: new Date ("2023-4-21 18:30:00").getTime(),
//     EndMessage: DefaultEndMessage
// }

// const EndOfProject = {
//     title: "Tiempo restante para entrega de proyecto",
//     targetDate: new Date ("2023-4-28 18:30:00").getTime(),
//     EndMessage: DefaultEndMessage
// }

const NextSalida = {
    title: "Tiempo restante para salir",
    targetDate: GetNextHoraSalida(today),
    EndMessage: DefaultEndMessage
}
const Aguinaldo = {
    title: "Aguinaldo 2024",
    targetDate: new Date ("2024-11-15 03:00:00").getTime(),
    EndMessage: DefaultEndMessage
}


export const FechasAMostrar = [RelojQuincena,NextSalida,RelojUtilidades2023,Aguinaldo]