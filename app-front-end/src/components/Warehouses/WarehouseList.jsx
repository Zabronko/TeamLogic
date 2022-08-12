import { useEffect, useState } from "react";
import { Table, Card} from 'react-bootstrap'
import { Warehouse } from './Warehouse'
import axios from 'axios'

export const WarehouseList = () => {

    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        const res = await axios.get('http://localhost:8080/warehouses', {
            headers: {
                "Content-Type":'application/x-www-form-urlencoded'
            }
        });
        setWarehouses(res.data);
    }

    return (
        <Card style={{width:"80%", marginLeft:"10%", alignItems:"center"}}>
            <h1 style={{alignText:"center"}}>Warehouses</h1>
            <Table striped bordered hover className="warehouses">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>City</td>
                        <td>State</td>
                        <td>Number of Trucks</td>
                        <td>Number of Packages</td>
                    </tr>
                </thead>
                <tbody>
                    {warehouses.map((warehouse) => {
                        return < Warehouse key={warehouse.id} warehouse={warehouse} />
                    })}
                </tbody>
            </Table>
        </Card>
    );
}