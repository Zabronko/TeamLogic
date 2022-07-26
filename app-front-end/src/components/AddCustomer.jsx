import { useRef, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const AddCustomer = () => {
    const nameRef = useRef();
    const addressRef = useRef();

    const handleSubmit = async (event) => {}

  return (
    <Form onSubmit={handleSubmit}>
        <Row>
        <Col>
            <Form.Label >Name:</Form.Label>
            <Form.Control name="name" ref={nameRef} required placeholder='Enter Name of Customer' />
        </Col>
        <Col>
            <Form.Label >Address:</Form.Label>
            <Form.Control name="reason" ref={addressRef} required placeholder='Enter Address of Customer' />
        </Col>
        
  
    </Row>
    <Button variant="success" type="submit" >
        Submit New Customer
        </Button>
    </Form>
  )
}
