import { useState,useEffect } from 'react'
import { HeaderComponent } from '../Components/HeaderComponent';
import { RelojComponent } from '../Components/RelojComponent';
import {FechasAMostrar as DefaultDates} from '../Data/Dates'
import {today,adjustForDateDotNow} from '../Data/Constants'
import ModalComponent from '../Components/ModalComponent';
import YesNoModalComponent from '../Components/YesNoModalComponent';
export const Index = () => {
    const actualTime = today
    const states = {invisible: "invisible",visible: "visible", FechasAMostrar: "FechasAMostrar",toastSuccess:"success"}
    const [currentTime,setCurrentTime] = useState(actualTime);
    const [visibility,setVisibility] = useState("invisible");
    const [visibilityYN,setVisibilityYN] = useState("invisible");
    const [FechasAMostrar,setFechasAMostrar] = useState(DefaultDates)

    useEffect(()=> {
        const savedItems = JSON.parse(localStorage.getItem(states.FechasAMostrar))
        if (savedItems !== null) {
            setFechasAMostrar(savedItems)
        }
    },[states.FechasAMostrar])

    useEffect(()=> {
        const timer = setInterval(() => setCurrentTime(Date.now() + adjustForDateDotNow),1000)
        return () => clearInterval(timer);
    },[FechasAMostrar])    



    const toggleModalVisibility = () => {
        if (visibility === states.visible) {
            setVisibility(states.invisible);
        } else {
            setVisibility(states.visible);
        }
    }
    const toggleModalYNVisibility = () => {
        if (visibilityYN === states.visible) {
            setVisibilityYN(states.invisible);
        } else {
            setVisibilityYN(states.visible);
        }
    }

    const addNewCounter = (newCounter) => {
        const newArray = [...FechasAMostrar,newCounter]
        setFechasAMostrar(newArray)
        toggleModalVisibility()
        saveCounters(newArray)
    }
    
    const removeCounter = (index) => {
        if (window.confirm('¿Desea eliminar el contador?')) {
            const newArray = FechasAMostrar.filter((obj,pos) => pos !== index )
            setFechasAMostrar(newArray)
            saveCounters(newArray)
          } else {
            // Do nothing!
          }
    }

    const saveCounters = (newFechas) => {
        localStorage.setItem(states.FechasAMostrar.toString(),JSON.stringify(newFechas))
    }

    const resetCounters = () => {
        localStorage.setItem(states.FechasAMostrar.toString(),JSON.stringify(DefaultDates))
        setFechasAMostrar(JSON.parse(localStorage.getItem(states.FechasAMostrar)))
    }

    return (
        <>
        <HeaderComponent />
        <div className="container" >
            <div className="grid-container">
            {
                FechasAMostrar.map( (current,index) => {
                    return (
                        <RelojComponent 
                            relojData={current} 
                            time={currentTime} 
                            key={index} 
                            removeElement={removeCounter} 
                            index={index}
                        />
                    )
                }
            )
            }
            </div>
            <div className="d-flex justify-content-end">
                <button onClick={toggleModalVisibility} className="btn btn-primary mr-1">Agregar</button>
                <button onClick={toggleModalYNVisibility} className="btn btn-secundary">Reiniciar</button>
            </div>
        </div>
        <ModalComponent 
            visibility={visibility} 
            modal={setVisibility}
            toggle={toggleModalVisibility} 
            newTimer={addNewCounter}
            />
        <YesNoModalComponent 
                visibility={visibilityYN} 
                toggle={toggleModalYNVisibility}
                resetCounters={resetCounters} 
            />
        
        </>
    )
}