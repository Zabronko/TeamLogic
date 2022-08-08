import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const PackageMasterList = () => {
    const [packs, setPacks] = useState([]);
    const navigate = useNavigate();

    const handleClick = async (pack) => {
        axios.get(`http://localhost:8080/packages/packageId=${pack.id}`)
        .then(res => navigate(`/warehouses/${res.data}`));

    }

    useEffect(() => {
        axios.get('http://localhost:8080/packages')
            .then(res => {
                console.log(res.data);
                setPacks(res.data)
            });
    }, []);


    return (
        <Card style={{ width: "80%", alignContent: "center", marginLeft: "10%" }}>
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
        </Card>
    )
}
