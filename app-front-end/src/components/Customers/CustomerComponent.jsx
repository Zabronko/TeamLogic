import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { CustomerIndividual } from './CustomerIndividual';

export const CustomerComponent = ({customers}) => {

  
    return (
    <Table bordered>               
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
            {customers.map((customer) => {
                    return (
                    <CustomerIndividual key={customers.id} customer={customer}/>

                    );
                })}
            </tbody>

        </Table>
  )
}
