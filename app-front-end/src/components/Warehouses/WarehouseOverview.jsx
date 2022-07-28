import { Card } from "react-bootstrap";
import { PackageList } from "../Packages/PackageList";
import { TruckList } from "../Trucks/TruckList";

export const WarehouseOverview = ({warehouse}) => {

    console.log(warehouse);

    return (
        <>
        <Card style={{border:"none",width:"90%", marginLeft:"5%", alignContent:"center"}}>
            <h1 style={{textAlign:"center"}}>Trucks</h1>
            <TruckList trucks={warehouse.trucks} warehouse={warehouse}/>
        </Card>
        <Card style={{border:"none",width:"90%", marginLeft:"5%", alignContent:"center"}}>
            <h1 style={{textAlign:"center"}}>Packages</h1>
            <PackageList packages={warehouse.packages} warehouse={warehouse}/>
        </Card>
        </>
    );
}