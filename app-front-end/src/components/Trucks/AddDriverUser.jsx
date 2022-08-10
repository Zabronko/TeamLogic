
import { useRef, useState} from 'react';
import axios from 'axios';
import { ApplyDriverModal } from './ApplyDriverModal';
import { Form, Row, Button } from 'react-bootstrap';

export const AddDriverUser = () => {
    const [modalShow, setModalShow] = useState(false);


    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (event) => {
        try {
        event.preventDefault();
        const { data } = await axios.post('http://localhost:8080/apply',
        {
            username : usernameRef.current.value,
            password : passwordRef.current.value,
 
        }
        );

        usernameRef.current.value = null;
        passwordRef.current.value = null;
        
        setModalShow(true)
        } catch(err) {
            console.error(err);
        }
    }

  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Row} >
          <Form.Label>UserName</Form.Label>
          <Form.Control type="username" ref={usernameRef} required placeholder="Enter UserName" />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} required placeholder="Password" />
        </Form.Group>
        </Row>       
    <Row className="mb-3">
        <Button variant="success" type="submit" > Submit Application </Button>
    </Row>
    </Form>
            <ApplyDriverModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
    </>
  )
}
