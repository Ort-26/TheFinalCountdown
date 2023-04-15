import { useState,useEffect } from 'react'
import { HeaderComponent } from '../Components/HeaderComponent';
import { RelojComponent } from '../Components/RelojComponent';
import {FechasAMostrar as DefaultDates} from '../Data/Dates'
import {today} from '../Data/Constants'
import ModalComponent from '../Components/ModalComponent';
export const Index = () => {
    const actualTime = today
    const states = {invisible: "invisible",visible: "visible"}
    const [currentTime,setCurrentTime] = useState(actualTime);
    const [visibility,setVisibility] = useState("invisible");
    const [FechasAMostrar,setFechasAMostrar] = useState(DefaultDates)

    const toggleModalVisibility = () => {
        if (visibility === states.visible) {
            setVisibility(states.invisible);
        } else {
            setVisibility(states.visible);
        }
    }

    const addNewCounter = (newCounter) => {
    }
    
    const removeCounter = (index) => {
        const newArray = FechasAMostrar.filter((obj,pos) => pos !== index )

        setFechasAMostrar(newArray)
    }
    
    // useEffect(()=> {
    //     const timer = setInterval(() => setCurrentTime(Date.now() - 3600000),1000)
    //     return () => clearInterval(timer);
    // },[])    

    return (
        <>
        <HeaderComponent />
        <div className="container" >
            <div className="grid-container">
            {
                FechasAMostrar.map( (current,index) => {
                    return (
                        <RelojComponent relojData={current} time={currentTime} key={index} removeElement={removeCounter} index={index}/>
                    )
                }
            )
            }
            </div>
            <button onClick={toggleModalVisibility}>Agregar</button>
        </div>
        <ModalComponent visibility={visibility} toggle={toggleModalVisibility}/>
        </>
    )
}