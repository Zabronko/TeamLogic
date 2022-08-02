import { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { CustomerPackage } from "../components/Customers/CustomerPackage";
import { Button } from "react-bootstrap";
import { CreatePackage } from "../components/Packages/CreatePackage";
import Form from "react-bootstrap/Form";

export const CustomerInfo = () => {
  const location = useLocation();
  const customer = location.state.id;
  const [packages, setPackages] = useState([]);
  const [renderAddPackage, setRenderAddPackage] = useState(false);
  const [renderEditCustomer, setRenderEditCustomer] = useState(false);
  
  customer.name = "BBBBBB"

  useEffect(() => {
    axios.get(`http://localhost:8080/packages/customer${customer.id}`)
    .then(res => setPackages(res.data))
  },[customer.id]);
  
  return (
    <>
    <Card>
    {!renderEditCustomer && <> 
    <div>{customer.name}</div>
    <div>{customer.address}</div>
    <div>{customer.city}</div>
    <div>{customer.state}</div>
    </>}
    {renderEditCustomer && <> 
    <Form>
      <Form.Group>
      <Form.Label>Name</Form.Label>
        <Form.Control name="name"  placeholder={customer.name} defaultValue={customer.name}/>
      </Form.Group>
      <Form.Group>
      <Form.Label>Address</Form.Label>
        <Form.Control name="address"  placeholder={customer.address} defaultValue={customer.address}/>
      </Form.Group>
      <Form.Group>
      <Form.Label>City</Form.Label>
        <Form.Control name="city"  placeholder={customer.city} defaultValue={customer.city}/>
      </Form.Group>
      <Form.Group>
      <Form.Label>State</Form.Label>
        <Form.Select name="state"  placeholder={customer.state} defaultValue={customer.state} >
        <option>{customer.state}</option>
        <option>AR</option>
        <option>LA</option>
        <option>NM</option>
        <option>OK</option>
        <option>TX</option>
        </ Form.Select>
      </Form.Group>
      
    </Form>
    
    </>}

    <div><Button onClick={() => setRenderEditCustomer(!renderEditCustomer)}>edit customer</Button></div>
    
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