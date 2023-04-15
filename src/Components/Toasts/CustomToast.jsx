import React from 'react'

export default function CustomToast({toggle,toast}) {
  const {visibility,description,title,status} = toast
  const handleClose = () => {
    toggle()
  }
  return (
    <div className={"modal d-block "+visibility}>
        <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div class="alert alert-dismissible alert-success">
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                  <p><strong>{title}</strong>: {description}</p>
                  <button type="button" className="btn btn-close" data-bs-dismiss="alert">X</button>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    )
}

