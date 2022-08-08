import { useState } from 'react';
import { Card } from 'react-bootstrap'
import { AddCustomer } from '../components/Customers/AddCustomer'

export const SignupPage = () => {




  return (
    <Card style={{ width: "30%", marginLeft: "35%", justifyContent: "center" }}>
    <Card.Body >
      <AddCustomer />
    </Card.Body>
  </Card>
  )
}
