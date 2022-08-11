import { useEffect, useState } from "react"
import { Container, Card, Col, Row, CardGroup } from "react-bootstrap";
import { useCookies } from "react-cookie";


export const Home = () => {

  return (
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%", marginBottom:"10%"}}>
        <Card.Body>
           Welcome to DZ Logistics

           <Container style={{width: "90%", alignContent:"center", marginLeft:"5%"}}>
            <Row>
              Servicable States
            </Row>
            <CardGroup>
            <Card>Texas</Card>
            <Card>oklahoma</Card>
            <Card>Arkansas</Card>
            <Card>New Mexico</Card>
            <Card>Louisiana</Card>
            <Card>Arizona</Card>



            </CardGroup>
           </Container>
        </Card.Body>
    </Card>
  )
}
