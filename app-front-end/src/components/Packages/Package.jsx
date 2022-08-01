import { Form } from "react-bootstrap";
import { useRef } from "react";

export const Package = ({ mode, pack, warehouse }) => {

    warehouse.trucks.forEach((truck) => {
        truck.packages.forEach((pack2) => {
            if (pack2.id === pack.id) {
                pack.truck = truck;
            }
        })
    })

    const selectedRef = useRef(pack.truck !== undefined ? pack.truck.id : "In Warehouse");

    if (mode === 'read') {
        return (
            <tr>
                <td>{pack.id}</td>
                <td>{pack.description}</td>
                <td>{warehouse.city},{warehouse.state}</td>
                <td>{pack.truck !== undefined ? pack.truck.id : 'none'}</td>
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
                <td><select defaultValue={pack.truck !== undefined ? pack.truck.id : selectedRef.current} onChange={(e) => { e.target.value !== "In Warehouse" ? pack.truck = warehouse.trucks.filter(data => data.id === parseInt(e.target.value))[0] : pack.truck=undefined }}>
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