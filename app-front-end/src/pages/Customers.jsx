import Card from "react-bootstrap/Card"
import { CustomerComponent } from "../components/CustomerComponent"
import { AddCustomer } from "../components/AddCustomer"

export const Customers = () => {
  return (
    <>
    <Card>
      <Card.Body>
        <AddCustomer />
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <CustomerComponent />
      </Card.Body>
    </Card>
    </>
  )
}
