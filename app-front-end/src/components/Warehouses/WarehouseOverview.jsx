import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { PackageList } from "../Packages/PackageList";
import { TruckList } from "../Trucks/TruckList";

export const WarehouseOverview = ({warehouse, setWarehouse}) => {

    const [mode,setMode] = useState('read');

    if(mode==='read') {
        return (
            <>
            <h1 style={{textAlign:"center"}}>Warehouse:  {warehouse.city},{warehouse.state}</h1>
            <Card style={{border:"none",width:"90%", marginLeft:"5%", alignContent:"center"}}>
                <h2 style={{textAlign:"center"}}>Trucks</h2>
                <TruckList trucks={warehouse.trucks} warehouse={warehouse}/>
            </Card>
            <Card style={{border:"none",width:"90%", marginLeft:"5%", alignContent:"center"}}>
                <h2 style={{textAlign:"center"}}>Packages</h2>
                <Button onClick={() => {setMode('editPackages')}}>Manage Packages</Button>
                <PackageList packages={warehouse.packages} mode={'read'} warehouse={warehouse}/>
            </Card>
            </>
        );
    } else if(mode==='editPackages') {
        return (
            <>
            <h1 style={{textAlign:"center"}}>Warehouse:  {warehouse.city},{warehouse.state}</h1>
            <Card style={{border:"none",width:"90%", marginLeft:"5%", alignContent:"center"}}>
                <h2 style={{textAlign:"center"}}>Trucks</h2>
                <TruckList trucks={warehouse.trucks} warehouse={warehouse}/>
            </Card>
            <Card style={{border:"none",width:"90%", marginLeft:"5%", alignContent:"center"}}>
                <h2 style={{textAlign:"center"}}>Packages</h2>
                <Button onClick={() => {setMode('read')}}>Save</Button>
                <PackageList packages={warehouse.packages} setWarehouse={setWarehouse} mode={'edit'} warehouse={warehouse}/>
            </Card>
            </>
        );
    }
}