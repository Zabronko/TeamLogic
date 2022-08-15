import { getDefaultMiddleware } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { load } from "react-cookies";
import { Truck } from "../Trucks/Truck";
import { Warehouse } from "../Warehouses/Warehouse";


export const GetAJob = () => {

    const [trucks, setTrucks] = useState([]);
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        const res = await axios.get('http://localhost:8080/warehouses', {
            headers: {
                "Content-Type":'application/x-www-form-urlencoded'
            }
        });
        setWarehouses(res.data);
    }
    
    if (warehouses.length >0) {
        warehouses.forEach((warehouse) => {
            warehouse.trucks.forEach((truck) => {
                if(truck.status.id === 1 & truck.packages.length > 5) {
                    truck.warehouse = warehouse;
                    trucks.push(truck);
                }
            })
        })
        return (
            <Card>
                <h1 style={{textAlign: 'center'}}>Jobs Available</h1>
                <Table striped bordered hover style={{ width: "98%", margin: "1%" }}>
                    <thead>
                        <tr>
                            <td>Type</td>
                            <td>Location</td>
                            <td>To:</td>
                            <td>Take Job</td>
                        </tr>
                    </thead>
                    <tbody>
                        {trucks.map((truck) => {
                            return <Truck key={truck.id} mode={'Driver'} truck={truck} warehouse={truck.warehouse} />
                        })}
                    </tbody>
                </Table>
            </Card>
        );
    }
}