import { useRef } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const AddCustomer = () => {
    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();

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
        <Col>
            <Form.Label >City:</Form.Label>
            <Form.Control name="city" ref={cityRef} required placeholder='Enter Customer City' />
        </Col>
        <Col>
            <Form.Label >State:</Form.Label>
            <Form.Select name="state" ref={stateRef} required  defaultValue="State">
            <option>State</option>
            <option>AR</option>
            <option>LA</option>
            <option>NM</option>
            <option>OK</option>
            <option>TX</option>
            </Form.Select>
        </Col>
        
  
    </Row>
    <Button variant="success" type="submit" >
        Submit New Customer
        </Button>
    </Form>
  )
}
