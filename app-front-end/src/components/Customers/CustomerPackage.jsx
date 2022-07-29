import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";


export const CustomerPackage = ({pack}) => {
  return (
    <Card>
      <CardHeader>package id  {pack.id}</CardHeader>
      <Card.Body>
      <div>Description: {pack.description} </div>
      <div>Status: {pack.status.status} </div>
      </Card.Body>

    </Card>
  )
}
