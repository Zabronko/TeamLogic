import {Card, Form, Button} from "react-bootstrap";
import { CustomerComponent } from '../../components/Customers/CustomerComponent';
import { useState, useEffect, useRef} from "react";
import axios from "axios";

export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const queryRef = useRef();


  useEffect(() => {
      axios.get('http://localhost:8080/customers')
      .then(res => setCustomers(res.data));
  },[]);

  const search = async (event) => {
    try {
      event.preventDefault();
    axios.get(`http://localhost:8080/customers/like?name=${queryRef.current.value}`)
    .then(res => setCustomers(res.data));
    }catch(err) {
      console.error(err);
  }

}


  return (
    <>
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%", marginBottom:"10%"}}>
      <h1 style={{textAlign:'center'}}>Customers</h1>
      <Form onSubmit={search} className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    ref={queryRef}
                  />
                  <Button type="submit" variant="outline-success">Search</Button>
                </Form>
      <Card.Body>
        <CustomerComponent customers={customers} />
      </Card.Body>
    </Card>
    </>
  )
}
