import { Card } from "react-bootstrap";
import { PackageList } from "../Packages/PackageList";
import { TruckList } from "../Trucks/TruckList";

export const WarehouseOverview = ({warehouse}) => {

    console.log(warehouse);

    return (
        <>
        <h1 style={{textAlign:"center"}}>Warehouse:  {warehouse.city},{warehouse.state}</h1>
        <Card style={{border:"none",width:"90%", marginLeft:"5%", alignContent:"center"}}>
            <h2 style={{textAlign:"center"}}>Trucks</h2>
            <TruckList trucks={warehouse.trucks} warehouse={warehouse}/>
        </Card>
        <Card style={{border:"none",width:"90%", marginLeft:"5%", alignContent:"center"}}>
            <h2 style={{textAlign:"center"}}>Packages</h2>
            <PackageList packages={warehouse.packages} warehouse={warehouse}/>
        </Card>
        </>
    );
}