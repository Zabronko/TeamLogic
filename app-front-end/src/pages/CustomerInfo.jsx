import { useEffect, useState } from "react";
import axios from "axios";
import {Card} from 'react-bootstrap'
import {useLocation} from 'react-router-dom';

export const CustomerInfo = () => {
  const [customer, setCustomer] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get(`http://localhost:8080/customers/${location.state.id}`)
    .then(res => setCustomer(res.data))
  },[]);
  
  return (
    <div>{customer.name}</div>
  )
}


