import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

export const ApplyDriverModal = (props) => {
    const navigate = useNavigate();

  const handleClick = async() => {
    navigate("/")
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
        Application Submitted
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Thank you for Applying for Trucker position with DZ Logistics.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Go to Home Page</Button>
      </Modal.Footer>
    </Modal>
  )
}
