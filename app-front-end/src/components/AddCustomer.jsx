import { useRef, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const AddCustomer = () => {
    const nameRef = useRef();
    const addressRef = useRef();

    const handleSubmit = async (event) => {}

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label >Name:</Form.Label>
            <Form.Control name="name" ref={nameRef} required placeholder='Enter Name of Customer' />
        </Form.Group>
        <Form.Group>
            <Form.Label >Address:</Form.Label>
            <Form.Control name="reason" ref={addressRef} required placeholder='Enter Address of Customer' />
        </Form.Group>
        
        <Button variant="success" type="submit" >
        Submit Request
        </Button>
    
    </Form>
  )
}
