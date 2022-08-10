import { WarehouseOverview } from "../../components/Warehouses/WarehouseOverview"
import {Card} from 'react-bootstrap'

export const WarehouseInfo = () => {


    return (
      <Card style={{width: "80%", alignContent:"center", marginLeft:"10%", marginBottom:"10%"}}>
        <WarehouseOverview/>
      </Card>
    )
}
