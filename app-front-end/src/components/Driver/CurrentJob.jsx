import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { Truck } from "../Trucks/Truck";


export const CurrentJob = () => {

    const [truck, setTruck] = useState([]);
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
        axios.get(`http://localhost:8080/Driver/${cookies['username']}`)
        .then(res => setTruck(res.data))
    },[])

    if(truck !== undefined) {
        return (
            <Card>
                <Row>
                    <h1>Current Job</h1>
                </Row>
                <Row>
                    <Col>
                        {truck.id}
                    </Col>
                </Row>
            </Card>
        );
    } else {
        return (
            <Card>
                <Row>
                    <h1>Current Job</h1>
                </Row>
                <Row>
                    <Col>
                        <p>No Current Job</p>
                        <a href="http://localhost:3000/DriverPortal/GetAJob">Get A Job</a>
                    </Col>
                </Row>
            </Card>
        );
    }
}