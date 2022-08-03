import React from 'react'

export const CreateProfile = () => {
  return (
    <Card style={{width: "80%", alignContent:"center", marginLeft:"10%"}}>
    <Card.Body>
      <AddCustomer customers={customers} setCustomers={setCustomers}/>
    </Card.Body>
  </Card>
  )
}
