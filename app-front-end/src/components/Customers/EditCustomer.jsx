import {useRef} from 'react'
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { Button } from 'react-bootstrap';

export const EditCustomer = ({customer, setCustomer}) => {
    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();

    const handleSubmit = async (event) => {
        try {
        event.preventDefault();
      
        const { data } = await axios.put(`http://localhost:8080/customers/${customer.id}`,
        {
            id: customer.id,
            name: nameRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value
        }
        );
            setCustomer(data);

        } catch(err) {
            console.error(err);
        }
    }


  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
    <Form.Label>Name</Form.Label>
      <Form.Control name="name" ref={nameRef} placeholder={customer.name} defaultValue={customer.name}/>
    </Form.Group>
    <Form.Group>
    <Form.Label>Address</Form.Label>
      <Form.Control name="address" ref={addressRef} placeholder={customer.address} defaultValue={customer.address}/>
    </Form.Group>
    <Form.Group>
    <Form.Label>City</Form.Label>
      <Form.Control name="city" ref={cityRef} placeholder={customer.city} defaultValue={customer.city}/>
    </Form.Group>
    <Form.Group>
    <Form.Label>State</Form.Label>
      <Form.Select name="state" ref={stateRef} placeholder={customer.state} defaultValue={customer.state} >
      <option>{customer.state}</option>
      <option>AR</option>
      <option>LA</option>
      <option>NM</option>
      <option>OK</option>
      <option>TX</option>
      </ Form.Select>
      <Button variant="success" type="submit" >
        Update Customer
        </Button>
    </Form.Group>
    
  </Form>
  )
}
