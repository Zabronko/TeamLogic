import { useEffect, useState } from "react"
import axios from 'axios';
import { Truck } from "../components/Trucks/Truck";
import { Table, Card } from "react-bootstrap";
import {AddTruckForm} from "../components/Trucks/AddTruckForm";

export const TruckMasterList = () => {

    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/warehouses`)
            .then(res => setWarehouses(res.data));
    }, [])

    return (
        <Card style={{width:"80%", marginLeft:"10%", borderRadius:"25px", border:"2px solid LightGray", alignItems:"center"}}>
            <h1>Trucks</h1>
            <Table striped bordered hover style={{width:"98%",margin:"1%"}}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Type</td>
                        <td>Warehouse</td>
                        <td>Number of Packages</td>
                        <td>Capacity</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {warehouses.map((warehouse) => {
                        return warehouse.trucks.map((truck) => {
                            return <Truck key={truck.id} truck={truck} warehouse={warehouse} />
                        })
                    })}
                </tbody>
            </Table>
            < AddTruckForm/>
        </Card>
    );
}