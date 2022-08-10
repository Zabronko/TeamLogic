import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const PackageMasterList = () => {
    const [packs, setPacks] = useState([]);
    const navigate = useNavigate();
    

    const handleClick = async (pack) => {
        axios.get(`http://localhost:8080/packages/packageId=${pack.id}`)
        .then(res => navigate(`/warehouses/${res.data}`));

    }
    const filter = async (id) => {
        axios.get(`http://localhost:8080/packages/status=${id}`)
        .then(res => setPacks(res.data));

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/packages`)
            .then(res => {
                console.log(res.data);
                setPacks(res.data)
            });
    }, []);


    return (
        <Card style={{ width: "60%", alignContent: "center", marginLeft: "20%" }}>
            <h1 style={{ textAlign: "center" }}>Packages</h1>
            <Card.Body>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Customer</th>
                        <th>Status  <DropdownButton  title="filter" >
                                        <Dropdown.Item onClick={() => filter(1)}>Idle</Dropdown.Item>
                                        <Dropdown.Item onClick={() => filter(2)}>Driving</Dropdown.Item>
                                        <Dropdown.Item onClick={() => filter(3)}>On Truck</Dropdown.Item>
                                        <Dropdown.Item onClick={() => filter(4)}>In Route</Dropdown.Item>
                                        <Dropdown.Item onClick={() => filter(5)}>Delivered</Dropdown.Item>
                                    </DropdownButton>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {packs.map((pack) => {
                        return (
                            <tr onClick={() => handleClick(pack)} key={pack.id}>
                                <td >{pack.id}</td>
                                <td>{pack.description}</td>
                                <td>{pack.customer.name}</td>
                                <td>{pack.status.status}</td>
                            </tr>

                        );
                    })}
                </tbody>

            </Table>
            </Card.Body>
        </Card>
    )
}
