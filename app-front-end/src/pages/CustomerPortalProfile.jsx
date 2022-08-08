import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import { CustomerPackage } from "../components/Customers/CustomerPackage";
import { Button, Card } from "react-bootstrap";
import { CreatePackage } from "../components/Packages/CreatePackage";
import { useCookies } from "react-cookie";
import { EditCustomer } from "../components/Customers/EditCustomer";

export const CustomerPortalProfile = () => {

    const [cookies, setCookie] = useCookies('Authority')
    const userBool = cookies["Authority"] === "ROLE_USER";
  
    const location = useLocation();
    const cust = location.state.id;
    const [customer, setCustomer] = useState([]);
    const [renderAddPackage, setRenderAddPackage] = useState(false);
    const [renderEditCustomer, setRenderEditCustomer] = useState(false);
   

  
    useEffect(() => {
        axios.get(`http://localhost:8080/customers/?username=${cookies['username']}`)
        .then(res => setCustomer(res.data))
    },[]);

  return (
    <>
    <h1 style={{ textAlign: "center" }}>Customer Profile</h1>
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%"}}>
    {!renderEditCustomer && <> 
    <Card.Header >Information</Card.Header>
    <div>Name: {customer.name}</div>
    <div>Address: {customer.address}</div>
    <div>City: {customer.city}</div>
    <div>State: {customer.state}</div>
    </>}
    {renderEditCustomer &&
     <EditCustomer customer={customer} setCustomer={setCustomer} renderEditCustomer={renderEditCustomer} setRenderEditCustomer={setRenderEditCustomer}/>
     }

    {!renderEditCustomer && userBool &&
     <div><Button onClick={() => setRenderEditCustomer(!renderEditCustomer)}>Edit Profile</Button></div>
     }
    </Card>

    </>
  )
}
