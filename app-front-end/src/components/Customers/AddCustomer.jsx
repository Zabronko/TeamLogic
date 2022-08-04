import { useRef} from "react";
import axios from "axios"; 


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        <Row>
        <Col>
            <Form.Label >Name:</Form.Label>
            <Form.Control name="name" ref={nameRef} required placeholder='Enter Name of Customer' />
        </Col>
        <Col>
            <Form.Label >Address:</Form.Label>
            <Form.Control name="address" ref={addressRef} required placeholder='Enter Address of Customer' />
        </Col>
        <Col>
            <Form.Label >City:</Form.Label>
            <Form.Control name="city" ref={cityRef} required placeholder='Enter Customer City' />
        </Col>
        <Col>
            <Form.Label >State:</Form.Label>
            <Form.Select name="state" ref={stateRef} required >
            <option></option>
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
