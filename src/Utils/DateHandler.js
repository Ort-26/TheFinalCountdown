import { today } from "../Data/Constants";

export const DateDifferenceFormater = (actualDate, targetDate) => { //Recibe valor numerico
    const date1 =  (actualDate);
    const date2 =  (targetDate);
    if (actualDate >= targetDate) { 
        return {days:0,hours:0,minutes:0,seconds:0}
    }
    let diff = Math.abs(date2-date1)/1000;
    const days = Math.floor(diff/86400);
    diff = diff - days * 86400;
    const hours = Math.floor(diff/3600) % 24;
    diff = diff - hours*3600;
    const minutes = Math.floor(diff/60)%60;
    diff = diff - minutes * 60;
    const seconds = Math.floor(diff % 60);
    const timeRemaining = {days,hours,minutes,seconds}
    return timeRemaining;
} 

export const GetNextHoraSalida = (actualDate) => {
    const actual = new Date(today);
    const actualDayNumber = actual.getDate()
    const actualMonth = actual.getMonth() + 1
    const actualYear = actual.getFullYear()
    let nextSalida = actual;
    
    //Verificar si es dia laboral
    const laboral = [1,2,3,4,5]
    // console.log(laboral.includes(nextSalida.getDay()));
    if (!laboral.includes(nextSalida.getDay())) {
        return actual;
    }

    //Verificar si es horario laboral
    const entrada = new Date(actualYear + "-" + actualMonth + "-" + actualDayNumber + " 08:30:00")
    const salida = new Date(actualYear + "-" + actualMonth + "-" + actualDayNumber + " 18:30:00")
        
    if (actual.getHours() < entrada.getHours() && actual.getHours() > salida.getHours()) {
        return actual;
    }

    return salida.getTime();
}

export const GetNextHoraSalidaAfluencias = (actualDate) => {
    const actual = new Date(today);
    const actualDayNumber = actual.getDate()
    const actualMonth = actual.getMonth() + 1
    const actualYear = actual.getFullYear()
    let nextSalida = actual;
    
    //Verificar si es dia laboral
    const laboral = [1,2,3,4,5]
    // console.log(laboral.includes(nextSalida.getDay()));
    if (!laboral.includes(nextSalida.getDay())) {
        return actual;
    }

    //Verificar si es horario laboral
    const entrada = new Date(actualYear + "-" + actualMonth + "-" + actualDayNumber + " 08:00:00")
    const salida = new Date(actualYear + "-" + actualMonth + "-" + actualDayNumber + " 18:00:00")
        
    if (actual.getHours() < entrada.getHours() && actual.getHours() > salida.getHours()) {
        return actual;
    }

    return salida.getTime();
}

export const GetNextQuincena = (actualDate) => { //Recibe un valor numerico y retorna un valor numerico
    let actual = new Date(today);
    const actualDayNumber = actual.getDate()
    const actualMonth = actual.getMonth() + 1
    let nextQuincena = actual;
        if (actualDayNumber < 15 || actualDayNumber >= 30) {
            nextQuincena = new Date (actual.getFullYear()+'-'+actualMonth+'-15 03:00:00')    
        } else if (actualDayNumber >= 15 ) {
            nextQuincena = new Date (actual.getFullYear()+'-'+actualMonth+'-30 03:00:00')
        } 
        if (nextQuincena.getDay() === 6 || nextQuincena.getDay() === 0 ) {
            if (actualDayNumber < nextQuincena.getDate() - 1) {
                nextQuincena = new Date (actual.getFullYear()+'-'+actualMonth+'-'+(nextQuincena.getDate() - 1) + ' 03:00:00')
            } else {
                nextQuincena = new Date (actual.getFullYear()+'-'+actualMonth+'-30 03:00:00')
            }
        }
        if (nextQuincena.getDay() === 0 && actualDayNumber < nextQuincena.getDate() - 1) {
            nextQuincena = new Date (actual.getFullYear()+'-'+actualMonth+'-'+(nextQuincena.getDate() + 1) + ' 03:00:00')
        }
        actual = null;
    return nextQuincena.getTime();
}

export const GetNextFriday = () => {
    let actual = new Date(today);
    
}