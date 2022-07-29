import { WarehouseOverview } from "../components/Warehouses/WarehouseOverview"
import { useEffect, useState } from "react";
import axios from "axios";
import {Card} from 'react-bootstrap'

export const WarehouseInfo = () => {

  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/warehouses/` + window.location.href.charAt(window.location.href.length-1))
    .then(res => setWarehouse(res.data))
    .finally(console.log(warehouse));
  },[]);



  if(warehouse.id!==undefined) {
    return (
      <Card style={{width: "80%", alignContent:"center", marginLeft:"10%"}}>
        <WarehouseOverview warehouse={warehouse} setWarehouse={setWarehouse}/>
      </Card>
    )
  }
}
