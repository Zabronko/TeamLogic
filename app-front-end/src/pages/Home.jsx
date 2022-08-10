import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import { useCookies } from "react-cookie";


export const Home = () => {

  return (
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%", marginBottom:"10%"}}>
        <Card.Body>
           Welcome to the Home page

        </Card.Body>
    </Card>
  )
}
