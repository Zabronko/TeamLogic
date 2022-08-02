import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { CustomerPackage } from "../components/Customers/CustomerPackage";
import { Button } from "react-bootstrap";
import { CreatePackage } from "../components/Packages/CreatePackage";

import { EditCustomer } from "../components/Customers/EditCustomer";


export const CustomerInfo = () => {
  const location = useLocation();
  const cust = location.state.id;
  const [customer, setCustomer] = useState([]);
  const [packages, setPackages] = useState([]);
  const [renderAddPackage, setRenderAddPackage] = useState(false);
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
    <Card>
    {!renderEditCustomer && <> 
    <div>{customer.name}</div>
    <div>{customer.address}</div>
    <div>{customer.city}</div>
    <div>{customer.state}</div>
    </>}
    {renderEditCustomer && <EditCustomer customer={customer} setCustomer={setCustomer} renderEditCustomer={renderEditCustomer} setRenderEditCustomer={setRenderEditCustomer}/>}

    {!renderEditCustomer && <div><Button onClick={() => setRenderEditCustomer(!renderEditCustomer)}>edit customer</Button></div>}
    </Card>
    <Button onClick={() => setRenderAddPackage(!renderAddPackage)}>add package</Button>
    {renderAddPackage && <CreatePackage customerId={customer.id} packages={packages} setPackages={setPackages}/>}
    <Card>
    {packages.map((pack) => {
                        return <CustomerPackage key={pack.id} pack={pack}/>
                    })}
    </Card>
    </>
  )
}