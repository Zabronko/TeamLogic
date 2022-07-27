import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";

export const CustomerComponent = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/Customers')
        .then(res => setCustomers(res.data));
    },[]);
  
    return (
    <Table bordered>               
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>

            </tbody>

        </Table>
  )
}
