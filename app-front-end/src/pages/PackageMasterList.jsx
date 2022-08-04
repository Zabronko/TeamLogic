import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const PackageMasterList = () => {
    const [packs, setPacks] = useState([]);


    const handleClick = async() => {
        // get warehouse id and route 
        //axios.get('http://localhost:8080/packages')
        //.then(res => setPacks(res.data));
      
    }

    useEffect(() => {
        axios.get('http://localhost:8080/packages')
        .then(res => {
            console.log(res.data);
            setPacks(res.data)
        });
    },[]);


  return (
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%"}}>
    <Table striped bordered hover>               
    <thead>
        <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Customer</th>
            <th>status</th>

        </tr>
    </thead>
    <tbody>
    {packs.map((pack) => {
                    return (
                    <tr onClick={handleClick} key={pack.id}>
                        <td >{pack.id}</td>
                        <td>{pack.description}</td>
                        <td>{pack.customerId}</td>
                        <td>{pack.status}</td>
                    </tr>

                    );
                })}
    </tbody>

</Table>
</Card>
  )
}
