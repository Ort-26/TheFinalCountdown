import React from 'react'

export default function ModalComponent({visibility,toggle}) {
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
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggle}>Close</button>
      </div>
    </div>
  </div>
</div>
  )
}
