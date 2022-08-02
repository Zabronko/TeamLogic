import { useEffect, useState } from "react"
import axios from 'axios';
import { Truck } from "../components/Trucks/Truck";
import { Table, Card, Collapse, Button } from "react-bootstrap";
import { AddTruckForm } from "../components/Trucks/AddTruckForm";

export const TruckMasterList = () => {

    const [collapse, setCollapse] = useState(true);
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/warehouses`)
            .then(res => setWarehouses(res.data));
    }, [])

    return (
        <Card style={{ width: "80%", marginLeft: "10%", borderRadius: "25px", border: "2px solid LightGray", alignItems: "center" }}>
            <h1>Trucks</h1>
            <Table striped bordered hover style={{ width: "98%", margin: "1%" }}>
                <thead>
                    <tr>
                        <td><Button onClick={() => {setCollapse(!collapse)}} style={{ fontSize:"8px", padding:"0" }}>Toggle</Button>ID</td>
                        <td>Type</td>
                        <td>Warehouse</td>
                        <td>Number of Packages</td>
                        <td>Capacity</td>
                        <td>To:</td>
                        <td>Status</td>
                    </tr>
                </thead>
                    <Collapse in={collapse}>
                <tbody>
                    {warehouses.map((warehouse) => {
                        return warehouse.trucks.map((truck) => {
                            return <Truck key={truck.id} truck={truck} warehouse={warehouse} />
                        })
                    })}
                </tbody>
                </Collapse>
            </Table>
            < AddTruckForm />
        </Card>
    );
}