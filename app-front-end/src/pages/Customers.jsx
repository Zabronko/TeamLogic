import Card from "react-bootstrap/Card";
import { CustomerComponent } from '../components/Customers/CustomerComponent';
import { AddCustomer } from "../components/Customers/AddCustomer";
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
    <Card>
      <Card.Body>
        <AddCustomer customers={customers} setCustomers={setCustomers}/>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <CustomerComponent customers={customers}/>
      </Card.Body>
    </Card>
    </>
  )
}
