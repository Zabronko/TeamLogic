import React from 'react';
import { AddDriverUser } from '../components/Trucks/AddDriverUser';
import { Card } from 'react-bootstrap';

export const ApplyDriver = () => {
  return (
    <Card style={{ width: "30%", marginLeft: "35%", justifyContent: "center" }}>
    <Card.Body >
      <AddDriverUser />
    </Card.Body>
  </Card>
  )
}
