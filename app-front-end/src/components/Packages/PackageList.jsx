import { Table } from 'react-bootstrap'
import { Package } from './Package';

export const PackageList = ({trucks, mode, warehouse}) => {

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>description</td>
                        <td>From</td>
                        <td>Truck</td>
                        <td>Customer</td>
                        <td>status</td>
                    </tr>
                </thead>
                <tbody>
                    {trucks.map((truck) => {
                        return (truck.packages.map((pack) => {
                            pack.truck = truck;
                            warehouse.packages = warehouse.packages.filter(data => data.id !== pack.id)
                            return < Package key={pack.id} mode={mode} pack={pack} truck={truck} warehouse={warehouse} />
                        }))
                    })}
                    {warehouse.packages.map((pack) => {
                        return < Package key={pack.id} mode={mode} pack={pack} truck={undefined} warehouse={warehouse} />
                    })}
                </tbody>
            </Table>
        </>
    );

}