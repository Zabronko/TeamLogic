import { useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

export const AddTruckForm = () => {

    const typeRef = useRef();
    const warehouseRef = useRef();
    const capacityRef = useRef();

    const handleSubmit = async () => {
        await axios.post(`http://localhost:8080/trucks?warehouseId=${warehouseRef.current.value}`, 
        {
            type: typeRef.current.value,
            capacity: capacityRef.current.value,
            packages: [],
            status: {
                id: 1,
                status: "Idle"
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit} style={{justifyContent:"center", width:"90%", padding:"5%"}}>
            <Row>
                <Col>
                    <Form.Label>Type: <p style={{color:"red", fontSize:"10px", margin:0}}>*required</p></Form.Label>
                    <Form.Select name="Type" ref={typeRef} required={true} defaultValue="Type">
                        <option value="">Type</option>
                        <option value="Delivery">Delivery</option>
                        <option value="Freight">Freight</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label>Warehouse:<p style={{color:"red", fontSize:"10px", margin:0}}>*required</p></Form.Label>
                    <Form.Select name="warehouse" ref={warehouseRef}  required={true} defaultValue="warehouse">
                        <option value="">warehouse</option>
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
                <Col>
                    <Form.Label>Capacity:<p style={{color:"red", fontSize:"10px", margin:0}}>*required</p></Form.Label>
                    <Form.Control name="Capacity" ref={capacityRef} required={true} placeholder='Enter Capacity of Truck' />
                </Col>
            </Row>
            <Row>
                <Button variant="success" type="submit">Submit New Truck</Button>
            </Row>
        </Form >
    );
}