import Card from "react-bootstrap/Card";
import { CustomerComponent } from '../../components/Customers/CustomerComponent';
import { useState, useEffect } from "react";
import axios from "axios";

export const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/customers')
      .then(res => setCustomers(res.data));
  },[]);

  return (
    <>
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%", marginBottom:"10%"}}>
      <h1 style={{textAlign:'center'}}>Customers</h1>
      <Card.Body>
        <CustomerComponent customers={customers} />
      </Card.Body>
    </Card>
    </>
  )
}
