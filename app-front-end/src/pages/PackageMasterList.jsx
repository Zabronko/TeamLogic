import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Card } from 'react-bootstrap';
import { CreatePackage } from '../components/Packages/CreatePackage';
import { useNavigate } from 'react-router-dom';

export const PackageMasterList = () => {
    const [packs, setPacks] = useState([]);


    const handleClick = async() => {
        // get warehouse id and route 
      
    }

    useEffect(() => {
        axios.get('http://localhost:8080/packages')
        .then(res => setPacks(res.data));
    },[]);


  return (
    <>
{/*    <Card>
        <CreatePackage packs={packs} setPacks={setPacks}/>
    </Card> */}
    <Table striped bordered hover>               
    <thead>
        <tr>
            <th>ID</th>
            <th>Description</th>
            <th>status</th>
        </tr>
    </thead>
    <tbody>
    {packs.map((pack) => {
                    return (
                    <tr onClick={handleClick} key={pack.id}>
                        <td >{pack.id}</td>
                        <td>{pack.description}</td>
                        <td>{pack.status.status}</td>
                    </tr>

                    );
                })}
    </tbody>

</Table>
</>
  )
}
