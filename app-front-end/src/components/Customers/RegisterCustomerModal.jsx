import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export const RegisterCustomerModal = (props) => {
    const navigate = useNavigate();

  const handleClick = async() => {
    navigate("/signin")
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        New Customer User Created
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Thank you for registering customer profile with DZ Logistics, please log in to profile to request packages.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Sign In</Button>
      </Modal.Footer>
    </Modal>
  )
}
