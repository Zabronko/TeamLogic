import Table from 'react-bootstrap/Table';
import { CustomerIndividual } from './CustomerIndividual';

export const CustomerComponent = ({customers}) => {

  
    return (
    <Table striped bordered hover>               
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
            {customers.map((customer) => {
                    return (
                    <CustomerIndividual key={customer.id} customer={customer}/>

                    );
                })}
            </tbody>

        </Table>
  )
}
