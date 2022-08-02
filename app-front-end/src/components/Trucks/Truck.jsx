import { Button } from "react-bootstrap";
import axios from 'axios';
import { useEffect, useRef, useState } from "react";

export const Truck = ({ truck, warehouse, mode }) => {

    const packageOutput = () => {
        return truck.packages !== undefined ? truck.packages.length : 'None';
    }
    const [status,setStatus] = useState(truck.status.id)

    if(mode === 'read') {
        return (
            <tr>
                <td>{truck.id}</td>
                <td>{truck.type}</td>
                <td>{warehouse.city},{warehouse.state}</td>
                <td>{packageOutput()}</td>
                <td>{truck.capacity}</td>
                <td>
                    {truck.packages.length > 0 ? `${truck.packages[0].customer.city},${truck.packages[0].customer.state}` : ""}
                </td>
                <td>{truck.status.status}</td>
            </tr>
        );
    } else if(mode === 'edit') {
        return (
            <tr>
                <td>{truck.id}</td>
                <td>{truck.type}</td>
                <td>{warehouse.city},{warehouse.state}</td>
                <td>{packageOutput()}</td>
                <td>{truck.capacity}</td>
                <td>
                    {truck.packages.length > 0 ? `${truck.packages[0].customer.city},${truck.packages[0].customer.state}` : ""}
                </td>
                <td><Button style={{backgroundColor:"white", color:"black"}} onClick={() => {status===1?truck.status.id=3:truck.status.id=1; setStatus(truck.status.id)}} >{status===1?'parked':'departed'}</Button></td>
            </tr>
        );
    }
}