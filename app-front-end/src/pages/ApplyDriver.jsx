import React from 'react';
import { AddDriverUser } from '../components/Trucks/AddDriverUser';
import { Card } from 'react-bootstrap';

export const ApplyDriver = () => {
  return (
    <Card style={{ width: "30%", marginLeft: "35%", justifyContent: "center" }}>
      <Card.Header> Register Username an Password to Apply</Card.Header>
    <Card.Body >
      <AddDriverUser />
    </Card.Body>
  </Card>
  )
}
