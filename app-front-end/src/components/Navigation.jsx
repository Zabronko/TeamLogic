import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Navigation = ({children}) => {
    return (

        <Navbar expand bg="light" className="justify-content-center">
            <Nav as="h3" variant="tabs" >
                {children}
            </Nav>
        </Navbar>



    );
}