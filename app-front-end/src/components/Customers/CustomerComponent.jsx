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
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
            {customers.map((customer) => {
                    return (
                    // <CustomerIndividual key={customers.id} customer={customer} customers={requests} setCustomers={setCustomers}/>
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.address}</td>
                        <td>{customer.city}</td>
                        <td>{customer.state}</td>

                    </tr>
                    );
                })}
            </tbody>

        </Table>
  )
}
