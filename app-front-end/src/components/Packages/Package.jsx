import { Form } from "react-bootstrap";
import axios from 'axios';
import { useRef } from "react";

export const Package = ({ mode, setWarehouse, pack, warehouse }) => {

    const updateWarehouse = () => {
        axios.put(`http://localhost:8080/packages/${pack.id}`, pack)
        .then(res => warehouse = res.data);
    }

    if (mode === 'read') {
        return (
            <tr>
                <td>{pack.id}</td>
                <td>{pack.description}</td>
                <td>{warehouse.city},{warehouse.state}</td>
                <td>{pack.truck===undefined?'none':pack.truck.id}</td>
                <td>{pack.customer.name}</td>
                <td>{pack.status.status}</td>
            </tr>
        );
    } else if (mode === 'edit') {
        return (
            <tr>
                <td>{pack.id}</td>
                <td><Form>
                    <input onChange={(e) => { pack.description = e.target.value }} placeholder={pack.description} />
                </Form></td>
                <td>{warehouse.city},{warehouse.state}</td>
                <td><select value={pack.truck===undefined?undefined:pack.truck.id} onChange={(e) => {const truck = warehouse.trucks[e.target.value-1]; truck.packages = [...truck.packages, pack]; updateWarehouse(); pack.truck = truck;}}>
                        <option value={undefined}>In Warehouse</option>
                        {warehouse.trucks.map((truck) => {
                            return <option key={truck.id} value={truck.id} >{truck.id}</option>
                        })}
                    </select></td>
                <td>{pack.customer.name}</td>
                <td>{pack.status.status}</td>
            </tr>
        );
    }
}