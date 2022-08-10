import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import { CustomerPackage } from "../../components/Customers/CustomerPackage";
import { Card, Table} from "react-bootstrap";

import { EditCustomer } from "../../components/Customers/EditCustomer";


export const CustomerInfo = () => {

  const location = useLocation();
  const cust = location.state.id;
  const [customer, setCustomer] = useState([]);
  const [packages, setPackages] = useState([]);

  const [renderEditCustomer, setRenderEditCustomer] = useState(false);
 
  const getData = async() => {
    const res = await axios.get(`http://localhost:8080/customers/${cust.id}`);
    setCustomer(res.data);
}

  useEffect(() => {
    axios.get(`http://localhost:8080/packages/customer${cust.id}`)
    .then(res => setPackages(res.data))
    .then(getData)
  },[cust.id]);

  
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Customer Information</h1>
    <Card style={{width: "50%", alignContent:"center", marginLeft:"25%", marginBottom:"1%"}}>
    {!renderEditCustomer && <> 
    <Card.Header style={{textAlign: "center"}}>Customer</Card.Header>
    <Card.Body style={{ textAlign: "center" }}>
    <div>{customer.name}</div>
    <div>{customer.address}</div>
    <div>{customer.city}, {customer.state}</div>
    </Card.Body>
    </>}
    {renderEditCustomer &&
     <EditCustomer customer={customer} setCustomer={setCustomer} renderEditCustomer={renderEditCustomer} setRenderEditCustomer={setRenderEditCustomer}/>
     }

    </Card>


    <Card style={{ width: "50%", alignContent: "center", marginLeft: "25%" }}>
      <Card.Header style={{textAlign: "center"}}>Customer Packages</Card.Header>
    <Table striped bordered hover >
        <thead>
            <tr>
                <th>ID</th>
                <th>Description</th>
                <th>status</th>

            </tr>
        </thead>
        <tbody>
            {packages.map((pack) => {
                return (
                  <CustomerPackage key={pack.id} pack={pack}/>

                );
            })}
        </tbody>

    </Table>
    </Card>
    
    </>
  )
}