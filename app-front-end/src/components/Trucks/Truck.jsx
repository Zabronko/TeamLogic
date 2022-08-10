import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Truck = ({ truck, warehouse, mode }) => {

    const packageOutput = () => {
        return truck.packages !== undefined ? truck.packages.length : 'None';
    }
    const [status,setStatus] = useState(truck.status.id)
    const [cookies, setCookie] = useCookies();
    const history = useNavigate()

    useEffect(() => {

    },[])

    const handleDriverTakingJob = () => {
        truck.status.id = 2
        axios.post(`http://localhost:8080/Driver/truck/${truck.id}?username=${cookies['username']}`)
        .then(res => console.log(res.data))
        //history('Driver/CurrentJob');
    }

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
                <td>{truck.status.status}</td>
            </tr>
        );
    }else if(mode === 'Driver') {
        return (
            <tr>
                <td>{truck.type}</td>
                <td>{warehouse.city},{warehouse.state}</td>
                <td>
                    {`${truck.packages[0].customer.city},${truck.packages[0].customer.state}`}
                </td>
                <td><Button style={{backgroundColor:"white", color:"black"}} onClick={handleDriverTakingJob()}>Take Job</Button></td>
            </tr>
        );
    }
}