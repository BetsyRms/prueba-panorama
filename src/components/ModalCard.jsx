import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCard = ({todo}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-light" onClick={handleShow} className='card' key={todo.id}>
        <img className='img' src={todo.img} alt="product" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{todo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex align-center d-column'>
            <img src={todo.img} alt='product'/>
            <span>{`SKU: ${todo.sku}`}</span>
            <span>{`Price: $${todo.price}`}</span>
            <span>{`Description: `}
            {todo.description}</span>
          </div> 
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalCard
