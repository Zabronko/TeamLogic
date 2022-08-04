import { useRef} from "react";
import axios from "axios"; 

import {Form, Button, Row, Col} from 'react-bootstrap';


export const AddCustomer = ({customers, setCustomers}) => {
    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();

    const handleSubmit = async (event) => {
        try {
        event.preventDefault();
        const { data } = await axios.post('http://localhost:8080/customers',
        {
            name: nameRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value
        }
        );
        setCustomers([...customers, data]);

        nameRef.current.value = null;
        addressRef.current.value = null;
        cityRef.current.value = null;
        stateRef.current.value = null;
        } catch(err) {
            console.error(err);
        }
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Row} >
          <Form.Label>UserName</Form.Label>
          <Form.Control type="username" placeholder="Enter UserName" />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Label >Name:</Form.Label>
            <Form.Control name="name" ref={nameRef} required placeholder='Enter Name of Customer' />
        </Row>
        <Row className="mb-3">
            <Form.Label >Address:</Form.Label>
            <Form.Control name="address" ref={addressRef} required placeholder='Enter Address of Customer' />
        </Row>
        <Row className="mb-3">
            <Form.Group  as={Col}>
                <Form.Label >City:</Form.Label>
                <Form.Control name="city" ref={cityRef} required placeholder='Enter Customer City' />
            </Form.Group>
            <Form.Group  as={Col}>
            <Form.Label >State:</Form.Label>
            <Form.Select name="state" ref={stateRef} required >
                <option value="">State</option>
                <option>AR</option>
                <option>LA</option>
                <option>NM</option>
                <option>OK</option>
                <option>TX</option>
            </Form.Select>
            </Form.Group>
        </Row>
        
    <Row className="mb-3">
        <Button variant="success" type="submit" > Sign Up </Button>
    </Row>
    </Form>
  )
}
