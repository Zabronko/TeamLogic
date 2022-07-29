import { Form } from "react-bootstrap";
import axios from 'axios';
import { useRef } from "react";

export const Package = ({ mode, pack, truck, warehouse}) => {

    const selectedRef = useRef(pack.truck!==undefined?pack.truck.id:"In Warehouse");

    const updateTruck = () => {
        pack.truck = [];
        axios.put(`http://localhost:8080/packages/${pack.id}?truckId=${selectedRef.current!=="In Warehouse"?selectedRef.current:-1}`, pack)
        .then(res => {
            pack.truck = selectedRef;
        });
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
                    <input onChange={(e) => {pack.description = e.target.value; updateTruck()}} placeholder={pack.description} />
                </Form></td>
                <td>{warehouse.city},{warehouse.state}</td>
                <td><select defaultValue={pack.truck!==undefined?pack.truck.id:selectedRef.current} onChange={(e) => {if(e.target.value!=='In Warehouse') {pack.truck = warehouse.trucks[e.target.value-1];} selectedRef.current = e.target.value; updateTruck()}}>
                        <option value="In Warehouse">In Warehouse</option>
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