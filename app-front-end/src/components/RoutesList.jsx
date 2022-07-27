import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'
import { Route } from "./Route";

export const RoutesList = () => {

    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        const res = await fetch('http://localhost:8080/routes');
        const promise = res.json();
        Promise.resolve(promise)
        .then(value=> setRoutes(value));
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Region</td>
                        <td>Number of packages</td>
                    </tr>
                </thead>
                <tbody>
                    {routes.map((route) => {
                        return < Route key={route.id} route={route} />
                    })}
                </tbody>
            </Table>
        </>
    );
}