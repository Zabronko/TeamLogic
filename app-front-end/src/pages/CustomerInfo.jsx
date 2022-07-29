import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card";

export const CustomerInfo = () => {
  const [customer, setCustomer] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get(`http://localhost:8080/customers/${location.state.id}`)
    .then(res => setCustomer(res.data))
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
    {customer.packages?.map((pack) => {
                        return <div key={pack.id}> {pack.id}</div>
                    })}
    </Card>
    </>
  )
}