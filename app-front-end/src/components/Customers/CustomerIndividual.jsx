import React from 'react'
import { useNavigate } from 'react-router-dom'



export const CustomerIndividual = ({customer}) => {

  const history = useNavigate();


  const handleClick = async() => {
    history(`./${customer.id}`, {state:{id:customer.id}})
  }

  return (
    <tr onClick={handleClick}>
    <td>{customer.name}</td>
    <td>{customer.address}</td>
    <td>{customer.city}</td>
    <td>{customer.state}</td>
    </tr>
  )
}
