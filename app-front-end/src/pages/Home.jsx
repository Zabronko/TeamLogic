
import { Container, Card, CardGroup } from "react-bootstrap";



export const Home = () => {

  return (
    <div className="px-4 py-5 my-5 text-center" >
    <Card style={{width: "80%", textAlign: "center", alignContent:"center", marginLeft:"10%", marginBottom:"10%"}}>
        <Card.Body >
          <div className='h3'>
           Welcome to DZ Logistics
          </div>

           <Container className='mt-5' fluid style={{width: "90%", alignContent:"center", marginLeft:"5%"}}>
            
              <div className='h3'>Servicable States</div>
            
            <CardGroup >
            <Card><Card.Body>Texas</Card.Body></Card>
            <Card><Card.Body>Oklahoma</Card.Body></Card>
            <Card><Card.Body>Arkansas</Card.Body></Card>
            <Card><Card.Body>New Mexico</Card.Body></Card>
            <Card><Card.Body>Louisiana</Card.Body></Card>
            <Card><Card.Body>Arizona</Card.Body></Card>



            </CardGroup>
           </Container>
        </Card.Body>
    </Card>
    </div>
  )
}
