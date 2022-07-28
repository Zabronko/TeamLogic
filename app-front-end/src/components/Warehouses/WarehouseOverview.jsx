import { PackageList } from "../Packages/PackageList";
import { TruckList } from "../Trucks/TruckList"

export const WarehouseOverview = ({warehouse}) => {

    console.log(warehouse);

    return (
        <>
            <h1>Trucks</h1>
            <TruckList trucks={warehouse.trucks} warehouse={warehouse}/>
            <h1>Packages</h1>
            <PackageList packages={warehouse.packages} warehouse={warehouse}/>
        </>
    );
}