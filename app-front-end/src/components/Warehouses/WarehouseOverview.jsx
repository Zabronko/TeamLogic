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
                        <h4 style={{ textAlign: "center" }}>Trucks</h4>
                        <TruckList mode={mode} warehouse={warehouse} />
                    </Card>
                    <Card style={{ border: "none", width: "90%", marginLeft: "5%", justifyContent: "center" }}>
                        <Button style={{padding:0,width:'30%',marginLeft:"35%"}} onClick={() => { setMode('edit') }}>Manage Packages</Button>
                        <h4 style={{ textAlign: "center" }}>Packages To Deliver</h4>
                        <PackageList mode={'read'} warehouse={warehouse} type={'deliver'}/>
                        <h4 style={{ textAlign: "center" }}>Packages To Ship</h4>
                        <PackageList mode={'read'} warehouse={warehouse} type={'ship'}/>
                    </Card>
                </>
            );
        } else if (mode === 'edit') {
            return (
                <>
                    <h1 style={{ textAlign: "center" }}>Warehouse:  {warehouse.city},{warehouse.state}</h1>
                    <Card style={{ border: "none", width: "90%", marginLeft: "5%", alignContent: "center" }}>
                        <h4 style={{ textAlign: "center" }}>Trucks</h4>
                        <TruckList warehouse={warehouse} mode={mode}/>
                    </Card>
                    <Card style={{ border: "none", width: "90%", marginLeft: "5%", alignContent: "center" }}>
                        <Button style={{padding:0,width:'30%',marginLeft:"35%"}} onClick={() => { setMode('read'); updateWarehouse()}}>Save</Button>
                        <h4 style={{ textAlign: "center" }}>Packages To Deliver</h4>
                        <PackageList mode={'edit'} warehouse={warehouse} type={'deliver'}/>
                        <h4 style={{ textAlign: "center" }}>Packages To Ship</h4>
                        <PackageList mode={'edit'} warehouse={warehouse} type={'ship'}/>
                    </Card>
                </>
            );
        }
    }
}