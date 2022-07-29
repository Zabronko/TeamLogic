import React from 'react'



export const CustomerIndividual = ({customer}) => {
  return (
    <tr>
    <td>{customer.name}</td>
    <td>{customer.address}</td>
    <td>{customer.city}</td>
    <td>{customer.state}</td>
    </tr>
  )
}
