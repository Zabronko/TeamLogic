import { Table } from 'react-bootstrap'
import { Package } from './Package';

export const PackageList = ({packages, warehouse}) => {
    
    console.log(warehouse);

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
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pack) => {
                        return < Package key={pack.id} pack={pack} warehouse={warehouse} />
                    })}
                </tbody>
            </Table>
        </>
    );
}