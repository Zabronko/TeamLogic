import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'
import { Warehouse } from './Warehouse'
import axios from 'axios'

export const WarehouseList = () => {

    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        const res = await axios.get('http://localhost:8080/warehouses');
        setWarehouses(res.data);
    }

    return (
        <>
            <Table striped bordered hover>
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
        </>
    );
}