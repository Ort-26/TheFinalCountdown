import { useState } from 'react'
import { HeaderComponent } from '../Components/HeaderComponent';
import { RelojComponent } from '../Components/RelojComponent';
import {FechasAMostrar} from '../Data/Dates'
import {today} from '../Data/Constants'
export const Index = () => {

    const actualTime = today
    const [currentTime,setCurrentTime] = useState(actualTime);
    //const [fechasAMostrar,setFechasAMostrar] = useState(FechasAMostrar)
    
    const tick = () => {
        const actual = Date.now() - 3600000
        setCurrentTime(actual)
    }
    
    setInterval(tick,1000)

    return (
        <>
        <HeaderComponent />
        <div className="container" >
            <div className="grid-container">
            {
                FechasAMostrar.map( (current,Index) =>{
                    return (
                        <RelojComponent relojData={current} time={currentTime} key={Index}/>
                    )
                }
            )
            }
            </div>
            {/* <button>Agregar</button> */}

        </div>
        </>
    )
}