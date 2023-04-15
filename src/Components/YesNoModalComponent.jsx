import React from 'react'

export default function YesNoModalComponent({visibility,toggle,resetCounters}) {
    const handleClose = () => {
        toggle()
    }

    const handleReset = (res) => {
        resetCounters()
        toggle()
    }
    return (
        <div className={"modal d-block "+visibility}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Reiniciar contadores</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <p>¿Desea reiniciar los contadores?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={handleReset}>Reiniciar</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
  )
}
