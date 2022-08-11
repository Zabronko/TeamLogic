import React from 'react';
import { AddDriverUser } from '../components/Trucks/AddDriverUser';
import { Card } from 'react-bootstrap';

export const ApplyDriver = () => {
  return (
    <Card style={{ width: "30%", marginLeft: "35%", justifyContent: "center" }}>
      <Card.Header> Register Username and Password to Apply for Driver Position</Card.Header>
    <Card.Body >
      <AddDriverUser />
    </Card.Body>
  </Card>
  )
}
