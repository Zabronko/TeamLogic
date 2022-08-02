import { useRef} from "react";
import axios from "axios"; 

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const CreatePackage = ({customerId, packages, setPackages}) => {
    const descriptionRef = useRef();
    const warehouseRef = useRef();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const { data } = await axios.put('http://localhost:8080/packages/new',
            {
                description: descriptionRef.current.value,
                warehouse: {
                    id: warehouseRef.current.value
                },
                status: {
                    id: 1,
                    status: "Idle"
                },
                customer: {
                    id: customerId
                }
            }
            );
            setPackages([...packages,data]);
    
            descriptionRef.current.value = null;
            warehouseRef.current.value = null;
            
            } catch(err) {
                console.error(err);
            }
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Row>
        <Col>
            <Form.Label >Description:</Form.Label>
            <Form.Control name="description" ref={descriptionRef} required placeholder='Enter description of item' />
        </Col>
        <Col>
            <Form.Label >Wharehouse:</Form.Label>
            <Form.Select name="warehouse" ref={warehouseRef} required  defaultValue="warehouse">
            <option>warehouse</option>
            <option value="5">Little Rock, AR</option>
            <option value="9">Little Rock, AZ</option>
            <option value="7">New Orleans, LA</option>
            <option value="8">Shreveport, LA</option>
            <option value="6">Albuquerque, NM</option>
            <option value="4">Oklahoma City, OK</option>
            <option value="3">Tulsa, OK</option>
            <option value="1">Dallas, TX</option>
            <option value="2">San Antonio, TX</option>
            </Form.Select>
        </Col>
        
  
    </Row>
    <Button variant="success" type="submit" >
        Submit New Package
        </Button>
    </Form>
  )
}
