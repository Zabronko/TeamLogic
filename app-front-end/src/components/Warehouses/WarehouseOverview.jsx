import { useState, useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import { PackageList } from "../Packages/PackageList";
import { TruckList } from "../Trucks/TruckList";
import axios from 'axios';

export const WarehouseOverview = () => {

    const [mode, setMode] = useState('read');
    const [warehouse, setWarehouse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/warehouses/` + window.location.href.charAt(window.location.href.length - 1))
            .then(res => {
                setWarehouse(res.data)
            });
    }, []);

    const updateWarehouse = () => {
        warehouse.packages.forEach((pack) => {
            if(pack.truck !== undefined) {
                pack.status.id = 3;
                warehouse.trucks.forEach((truck) => {
                    truck.packages = truck.packages.filter(data => data.id !== pack.id);
                })
                pack.truck.packages.push(pack);
                pack.truck = undefined;
            }else {
                pack.status.id = 1;
                warehouse.trucks.forEach((truck) => {
                    truck.packages = truck.packages.filter(data => data.id !== pack.id);
                })
                pack.truck = undefined;
            }
        })
        axios.put(`http://localhost:8080/warehouses/${warehouse.id}`, warehouse)
        .then(res => setWarehouse(res.data));

    }

    if (warehouse.id !== undefined) {
        if (mode === 'read') {
            return (
                <>
                    <h1 style={{ textAlign: "center" }}>Warehouse:  {warehouse.city},{warehouse.state}</h1>
                    <Card style={{ border: "none", width: "90%", marginLeft: "5%", alignContent: "center" }}>
                        <h2 style={{ textAlign: "center" }}>Trucks</h2>
                        <TruckList trucks={warehouse.trucks} warehouse={warehouse} />
                    </Card>
                    <Card style={{ border: "none", width: "90%", marginLeft: "5%", alignContent: "center" }}>
                        <h2 style={{ textAlign: "center" }}>Packages</h2>
                        <Button onClick={() => { setMode('editPackages') }}>Manage Packages</Button>
                        <PackageList mode={'read'} warehouse={warehouse} />
                    </Card>
                </>
            );
        } else if (mode === 'editPackages') {
            return (
                <>
                    <h1 style={{ textAlign: "center" }}>Warehouse:  {warehouse.city},{warehouse.state}</h1>
                    <Card style={{ border: "none", width: "90%", marginLeft: "5%", alignContent: "center" }}>
                        <h2 style={{ textAlign: "center" }}>Trucks</h2>
                        <TruckList warehouse={warehouse} />
                    </Card>
                    <Card style={{ border: "none", width: "90%", marginLeft: "5%", alignContent: "center" }}>
                        <h2 style={{ textAlign: "center" }}>Packages</h2>
                        <Button onClick={() => { setMode('read'); updateWarehouse() }}>Save</Button>
                        <PackageList mode={'edit'} warehouse={warehouse} />
                    </Card>
                </>
            );
        }
    }
}