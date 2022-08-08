import axios from 'axios';
import { Table } from 'react-bootstrap'
import { Package } from './Package';
import { CustomerPackage } from './CustomerPackage';

export const PackageList = ({ mode, warehouse, type, packages }) => {

    const findTruck = (pack, warehouse) => {
        warehouse.trucks.forEach((truck) => {
            truck.packages.forEach((pack2) => {
                if(pack2.id === pack.id) {
                    pack.truck = truck;
                }
            })
        })
    }

    const findWarehouse = (pack) => {
        const res = axios.get('http://localhost:8080/warehouses')
        const warehouses = res.data;
        warehouses.forEach((warehouse) => {
            warehouse.packages.forEach((pack2) => {
                if(pack2.id === pack.id) {
                    return warehouse;
                }
            })
        })
    }


    if(packages === undefined) {
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
                            findTruck(pack, warehouse);
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
    }else {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>OrderId</td>
                            <td>description</td>
                            <td>Delivery Address</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {packages.map((pack) => {
                            return <CustomerPackage key={pack.id} pack={pack}  />
                        })}
                    </tbody>
                </Table>
            </>
        );
    }

}