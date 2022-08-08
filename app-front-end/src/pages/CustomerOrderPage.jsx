import axios from "axios";
import { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Cookies, useCookies } from "react-cookie";


export const CustomerOrderPage = () => {

    const [numPackages, setNumPackages] = useState(1)

    const [packages, setPackages] = useState([]);
    const [cookies, setCookie] = useCookies();

    console.log(packages);

    const Package = (description) => {
        return {
            "description":description,
            "type":"Delivery",
            "customer": cookies['Customer'],
            "status": {
                "id":1,
                "status":"Idle"
            }
        }
    }
    var i = 0
    const placeOrder = async() => {
        if(numPackages===1) {
            await axios.post(`http://localhost:8080/packages/new`, Package("Time: " + new Date().toString()))
            .then(res => setPackages(res.data));
        }else {
            for(i;i<numPackages;i++) {
                packages.push(Package("Time: " + new Date().toString()))
            }
            console.log(packages);
            await axios.post(`http://localhost:8080/packages/newM`,packages)
            .then(res => setPackages(res.data));
        }
    }


    return (
        <>
            <h1>Order</h1>
            <Form >
                <Row style={{ justifyContent: "center" }}>
                    <Form.Label style={{ width: "25%", paddingRight: 0, fontSize: "18px" }}>Number of Packages </Form.Label>
                    <Button onClick={() => {setNumPackages(numPackages-1)}} style={{ width: "25%", backgroundColor: "white", color: "black", border: "3px solid black" }}>-</Button>
                    <Form.Label style={{ width: "25%", paddingRight: 0, fontSize: "18px" }}>{numPackages}</Form.Label>
                    <Button onClick={() => {setNumPackages(numPackages+1)}} style={{ width: "25%", backgroundColor: "white", color: "black", border: "3px solid black" }}>+</Button>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Button onClick={() => {placeOrder()}} style={{ width: "25%", backgroundColor: "white", color: "black", border: "3px solid black" }}>Place order</Button>
                </Row>
            </Form>
        </>
    );
}