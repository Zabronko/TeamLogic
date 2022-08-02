import { Table } from 'react-bootstrap'
import { Package } from './Package';

export const PackageList = ({ mode, warehouse, type }) => {

    const findTruck = (pack) => {
        warehouse.trucks.forEach((truck) => {
            truck.packages.forEach((pack2) => {
                if(pack2.id === pack.id) {
                    pack.truck = truck;
                }
            })
        })
    }


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>description</td>
                        <td>From:</td>
                        <td>Truck</td>
                        <td>Customer</td>
                        <td>To:</td>
                        <td>status</td>
                    </tr>
                </thead>
                <tbody>
                    {warehouse.packages.map((pack) => {
                        findTruck(pack);
                        if(type === undefined) {
                            return <Package key={pack.id} mode={mode} pack={pack} warehouse={warehouse} />
                        }else if(type === 'ship') {
                            if(warehouse.state !== pack.customer.state) {
                                return <Package key={pack.id} type={type} mode={mode} pack={pack} warehouse={warehouse} />
                            }
                        }else {
                            if(warehouse.state === pack.customer.state) {
                                return <Package key={pack.id} type={type} mode={mode} pack={pack} warehouse={warehouse} />
                            }
                        }
                    })}
                </tbody>
            </Table>
        </>
    );

}