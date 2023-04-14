import { useState,useEffect } from 'react'
import { HeaderComponent } from '../Components/HeaderComponent';
import { RelojComponent } from '../Components/RelojComponent';
import {FechasAMostrar} from '../Data/Dates'
import {today} from '../Data/Constants'
export const Index = () => {
    const actualTime = today
    const [currentTime,setCurrentTime] = useState(actualTime);
    // const [fechasAMostrar,setFechasAMostrar] = useState(actualTime)
    
    useEffect(()=> {
        const timer = setInterval(() => setCurrentTime(Date.now() - 3600000),1000)
        return () => clearInterval(timer);
    },[])    

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