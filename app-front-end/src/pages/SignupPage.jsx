import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { AddCustomer } from '../components/Customers/AddCustomer'

export const SignupPage = () => {
const [customers, setCustomers] = useState([]);



  return (
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%"}}>
    <Card.Body>
      <AddCustomer customers={customers} setCustomers={setCustomers}/>
    </Card.Body>
  </Card>
  )
}
