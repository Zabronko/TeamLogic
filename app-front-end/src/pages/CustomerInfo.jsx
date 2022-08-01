import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { CustomerPackage } from "../components/Customers/CustomerPackage";

export const CustomerInfo = () => {
  const [customer, setCustomer] = useState([]);
  const [packages, setPackages] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get(`http://localhost:8080/customers/${location.state.id}`)
    .then(res => setCustomer(res.data))
    axios.get(`http://localhost:8080/packages/customer${location.state.id}`)
    .then(res => setPackages(res.data))
  },[location.state.id]);
  
  return (
    <>
    <Card>
    <div>{customer.name}</div>
    <div>{customer.address}</div>
    <div>{customer.city}</div>
    <div>{customer.state}</div>
    
    </Card>
    <Card>
    {packages?.map((pack) => {
                        return <CustomerPackage key={pack.id} pack={pack}/>
                    })}
    </Card>
    </>
  )
}