import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const BonificationList = ({
  bonifications,
  isShow,
  toogleModal,
  currentBonif,
  applyBonification
}) => (
  <div id='results-component'>
    <table className="table table-hover">
      <thead>
        <tr>
          <th># Cargo</th>
          <th>Tipo</th>
          <th>Fecha y hora</th>
          <th>Monto</th>
          <th># Factura</th>
          <th>Item</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
      {bonifications.map(bonif =>
        <tr key={bonif.id}>
          <th scope="row">{bonif.id}</th>
          <td>{bonif.type}</td>
          <td>{bonif.date}</td>
          <td>$ {bonif.ammount}</td>
          <td>{bonif.fee}</td>
          <td>{bonif.item}</td>
          <td>
            <button
              className={bonif.isBonificated?'btn disabled btn-xs':'btn btn-primary btn-xs'}
              onClick={(e) => { e.preventDefault(); bonif.isBonificated || toogleModal(isShow, bonif) }}>
              {bonif.isBonificated?'Bonificado':'Bonificar'}
            </button>
          </td>
        </tr>
      )}
    </tbody>
  </table>
  <Modal show={isShow} onHide={toogleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Bonificar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4># {currentBonif && currentBonif.id}</h4>
        <p>Está seguro de aplicar una bonificacion al cargo <b>$ {currentBonif && currentBonif.ammount}</b> ?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(e)=>{e.preventDefault(); toogleModal(isShow, undefined);}}>Cancelar</Button>
        <Button bsStyle='primary' onClick={(e) => {e.preventDefault(); applyBonification(currentBonif); toogleModal(isShow, undefined)}}>Aceptar</Button>
      </Modal.Footer>
    </Modal>
  </div>

);

export default BonificationList
