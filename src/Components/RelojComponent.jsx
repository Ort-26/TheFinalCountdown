import React from 'react';
import {DateDifferenceFormater} from '../Utils/DateHandler'
export const RelojComponent = (props) => {
    const {title} = props.relojData
    const {days,hours,minutes,seconds} = DateDifferenceFormater(props.time,props.relojData.targetDate);
    return (
        <div className="card border-light mb-3">
            <h3 className="card-header text-center timer-title">{title}</h3>
            <div className="card-body d-flex align-items-center justify-content-center">
            <h2 className="timer"> 
                {(days !== 0) && days+'d : '}  
                {(days === 0 && hours === 0) ? '' :  hours+'h : '} 
                {(days === 0 && hours === 0 && minutes === 0) ? '' : minutes+"m : "}
                {(days === 0 && hours === 0 && minutes === 0 && minutes === 0) ? '' : seconds+"s"}
            </h2> 
            {days === 0 && hours === 0 && minutes === 0 && seconds === 0 && <h2 className="timer">Completado</h2>}

            </div>
        </div>
    )
}
