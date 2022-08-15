import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Truck } from "../Trucks/Truck";


export const CurrentJob = () => {

    const [truck, setTruck] = useState();
    const [cookies, setCookie, removeCookie] = useCookies();
    const history = useNavigate();
    const [checkingIn, setCheckingIn] = useState(false);
    const checkInTextRef = useRef('');

    const CheckInLabelRef = useRef()
    const CheckInInputRef = useRef()
    useEffect(() => {
        axios.get(`http://localhost:8080/Driver/${cookies['username']}`)
        .then(res => {
            setTruck(res.data);
        })

        if(truck !== undefined & truck !== '') {
            CheckInLabelRef.current = <h6>{truck.packages[0].lastCheckIn}</h6>;
            CheckInInputRef.current = <input ref={checkInTextRef.current} placeholder={truck.lastCheckIn}></input>;
        }

    },[])

    const handleCheckIn = (value) => {
        truck.packages.forEach((pack) => {
            console.log(CheckInInputRef.current)
            pack.lastCheckIn = checkInTextRef.current;
        })
        truck.warehouse = null;
        axios.put(`http://localhost:8080/packages/Driver`,truck.packages)
        .then(res => truck.packages = res.data)
    }

    const handleDriverCompleteJob = () => {
        truck.status.id = 5
        axios.post(`http://localhost:8080/Driver/complete/${truck.id}?username=${cookies['username']}&from=${cookies['JobWarehouse']}&truckId=${truck.id}`)
        .then(res => console.log(res.data))
        removeCookie('JobWarehouse')
        window.location.href = 'http://localhost:3000'
    }

    if(truck !== undefined & truck !== '') {
        return (
            <Card>
                <Row>
                    <h1>Current Job</h1>
                </Row>
                <Row className="CurrentJobInfo">
                    <Col>
                        <h5>Type</h5>
                        <h6>{truck.type}</h6>
                    </Col>
                    <Col>
                        <h5>Package Amount</h5>
                        <h6>{truck.packages.length}</h6>
                    </Col>
                    <Col>
                        <h5>From:</h5>
                        <h6>{cookies['JobWarehouse']}</h6>
                    </Col>
                    <Col>
                        <h5>To:</h5>
                        {
                            `${truck.packages[0].customer.city},${truck.packages[0].customer.state}` === cookies['JobWarehouse']?
                            <h6>Customers of: {truck.packages[0].customer.city},{truck.packages[0].customer.state}</h6>:
                            <h6>Warehouse In: {truck.packages[0].customer.city},{truck.packages[0].customer.state}</h6>
                        }
                    </Col>
                    <Col>
                        <h5>Last Check In</h5>
                        {checkingIn?<input onChange={(e) => {checkInTextRef.current = e.target.value}} placeholder={truck.lastCheckIn}></input>:<h6>{truck.packages[0].lastCheckIn}</h6>}
                    </Col>
                    <Col>
                        {checkingIn?<Button onClick={() => {setCheckingIn(false); handleCheckIn()}}>Save</Button>:<Button onClick={() => {setCheckingIn(true)}} >Check In</Button>}
                        <Button onClick={() => {handleDriverCompleteJob()}}>Complete Job</Button>
                    </Col>
                </Row>
            </Card>
        );
    } else {
        return (
            <Card style={{justifyContent:'center'}}>
                <Row>
                    <h1 style={{textAlign:'center'}}>Current Job</h1>
                </Row>
                <Row>
                    <h4 style={{textAlign:'center'}}>No Current Job</h4>
                    <Button onClick={() => {history('/Driver/GetAJob')}} style={{width:'20%', marginLeft:'40%'}} >Get A Job</Button>
                </Row>
            </Card>
        );
    }
}