import axios from "axios";
import { useEffect, useState } from "react"


export const WarehouseOverview = () => {

    const [warehouse, setWarehouse] = useState([]);


    useEffect(() => {
        getData();
    })

    const getData = async() => {
        const res = await axios.get(`http://localhost:8080/warehouses/${window.location.href.charAt(window.location.href.length-1)}`)
        setWarehouse(res.data);
    }

    console.log(warehouse);
}