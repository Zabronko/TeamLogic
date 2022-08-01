import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { CustomerPackage } from "../components/Customers/CustomerPackage";
import { Button } from "react-bootstrap";

export const CustomerInfo = () => {
  const location = useLocation();
  const customer = location.state.id;
  const [packages, setPackages] = useState([]);
  

  useEffect(() => {
    axios.get(`http://localhost:8080/packages/customer${customer.id}`)
    .then(res => setPackages(res.data))
  },[customer.id]);
  
  return (
    <>
    <Card>
    <div>{customer.name}</div>
    <div>{customer.address}</div>
    <div>{customer.city}</div>
    <div>{customer.state}</div>
    <div><Button>edit customer</Button></div>
    
    </Card>
    <Button>add package</Button>
    <Card>
    {packages?.map((pack) => {
                        return <CustomerPackage key={pack.id} pack={pack}/>
                    })}
    </Card>
    </>
  )
}