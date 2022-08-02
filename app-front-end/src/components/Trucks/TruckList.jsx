import { Table } from 'react-bootstrap'
import { Truck } from "./Truck";

export const TruckList = ({warehouse}) => {

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Type</td>
                        <td>Location</td>
                        <td>Number of Packages</td>
                        <td>Capacity</td>
                        <td>To:</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {warehouse.trucks.map((truck) => {
                        return < Truck key={truck.id} truck={truck} warehouse={warehouse}/>
                    })}
                </tbody>
            </Table>
        </>
    );
}