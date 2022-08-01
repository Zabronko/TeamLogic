import { useRef} from "react";
import axios from "axios"; 

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const CreatePackage = ({packs, setPacks}) => {
    const descritpionRef = useRef();
    const warehouseRef = useRef();

    const handleSubmit = async (event) => {}

  return (
    <Form onSubmit={handleSubmit}>
        <Row>
        <Col>
            <Form.Label >Description:</Form.Label>
            <Form.Control name="description" ref={descritpionRef} required placeholder='Enter description of item' />
        </Col>
        <Col>
            <Form.Label >Wharehouse:</Form.Label>
            <Form.Select name="warehouse" ref={warehouseRef} required  defaultValue="warehouse">
            <option>warehouse</option>
            <option>AR</option>
            <option>LA</option>
            <option>NM</option>
            <option>OK</option>
            <option>TX</option>
            </Form.Select>
        </Col>
        
  
    </Row>
    <Button variant="success" type="submit" >
        Submit New Package
        </Button>
    </Form>
  )
}
