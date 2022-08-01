import { useState, useEffect, useRef } from "react";
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
        warehouse.trucks.forEach((truck) => {
            truck.packages = [];
            warehouse.packages.map((pack) => {
                if(pack.truck !== undefined) {
                    if(pack.truck.id === truck.id) {
                        truck.packages.push(pack);
                    }
                }
                pack.truck = undefined   
            })
            console.log(truck);
        })

        const trucks = warehouse.trucks;
        const packages = warehouse.packages;
        trucks.map((truck) => (
            truck.packages.map((pack) => (
                packages.filter(data => data.id !== pack.id)
            ))
        ))

        axios.put(`http://localhost:8080/trucks?warehouseId=${warehouse.id}`, trucks)
            .then(res => setWarehouse(res.data));

        axios.put(`http://localhost:8080/packages?warehouseId=${warehouse.id}`, packages)
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