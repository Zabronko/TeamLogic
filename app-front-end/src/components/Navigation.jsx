import { Container} from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar';

export const Navigation = ({children}) => {
    return (

        <Navbar expand bg="light" className="justify-content-center">       
                {children}
        </Navbar>
        
    );
}