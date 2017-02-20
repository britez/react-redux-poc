import React from 'react'
import { connect } from 'react-redux'

import { Modal, Button } from 'react-bootstrap'

let ActionsComponent = ({
  isShow,
  onClick
  }) => {

  return (
    <div id='actions-component' className='row'>
      <div className='col-md-12'>
        <a
          className='btn btn-primary pull-right'
          onClick={(e)=>{e.preventDefault(); onClick(isShow);}}>
          Bonificación Especial</a>
      </div>

      <Modal show={isShow} onHide={onClick}>
          <Modal.Header closeButton>
            <Modal.Title>Bonificación especial</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Aca va el Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={(e)=>{e.preventDefault(); onClick(isShow);}}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};
ActionsComponent = connect()(ActionsComponent);

export default ActionsComponent
