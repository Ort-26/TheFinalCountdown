import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ModalComponent({visibility,toggle,newTimer}) {
    const [date,setDate] = useState(Date.now())
    const [title,setTitle] = useState('')
    const [invalidTitle,setInvalidTitle] = useState(false)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const submitNewTimer = () => {
        if (title.length === 0 ) {
            setInvalidTitle(true)
            return false;
        }

        const timer = {
            title,
            targetDate: new Date(date)
        }
        newTimer(timer)
    }

  return (
    <div className={"modal d-block "+visibility}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle}>
            <span aria-hidden="true"></span>
            </button>
        </div>
        <div className="modal-body">
            <label className="form-label mt-4">Ingrese la información del contador</label>
        <div className="d-flex flex-column">
            <div className="d-flex flex-column ml-1">
                <label className="form-label mt-4">Fecha y Hora</label>
                <DatePicker 
                    className="form-control"
                    dateFormat="yyyy-MMMM-dd hh:mm:ss"
                    selected={date}
                    onChange={(date) => setDate(date)}
                    timeInputLabel="Hora:"
                    showTimeInput
                />
            </div>
            <div className="d-flex flex-column ml-1">
                <label className="form-label mt-4">Título</label>
                <input 
                    className="form-control" 
                    placeholder="Ingrese un titulo"
                    onChange={handleTitle}
                />
                {invalidTitle && <p class="text-danger">Ingrese un título válido</p>}
            </div>
        </div>
            
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={submitNewTimer}>Agregar</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggle}>Close</button>
        </div>
        </div>
    </div>
    </div>

  )
}
