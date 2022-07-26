import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'
import { Headquarter } from "./Headquarter";

export const HeadquartersList = () => {

    const [headquarters, setHeadquarters] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        const res = await fetch('http://localhost:8080/headquarters');
        const promise = res.json();
        Promise.resolve(promise)
        .then(value=> setHeadquarters(value));
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>City</td>
                        <td>State</td>
                    </tr>
                </thead>
                <tbody>
                    {headquarters.map((headquarter) => {
                        return < Headquarter key={headquarter.id} headquarter={headquarter} />
                    })}
                </tbody>
            </Table>
        </>
    );
}