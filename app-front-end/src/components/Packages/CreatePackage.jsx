import { useRef} from "react";
import axios from "axios"; 

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'

export const CreatePackage = ({customerId, packages, setPackages}) => {
    const descriptionRef = useRef();


    
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const { data } = await axios.post(`http://localhost:8080/packages/new`,
            {
                description: descriptionRef.current.value,
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
            
            } catch(err) {
                console.error(err);
            }
    }

  return (
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%"}}>
    <Form onSubmit={handleSubmit}>
        <Row>
        <Col>
            <Form.Label >Description:</Form.Label>
            <Form.Control name="description" ref={descriptionRef} required placeholder='Enter description of item' />
        </Col>   
  
    </Row>
    <Button variant="success" type="submit" >
        Submit New Package
        </Button>
    </Form>
    </Card>
  )
}
