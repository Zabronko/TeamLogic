import axios from "axios";
import { Button, Card, Form, Row } from "react-bootstrap";
import { useRef} from "react";
import { useCookies } from "react-cookie";

export const SigninPage = () => {

    const usernameRef = useRef('');
    const passwordRef = useRef('');

    const [,setCookie] = useCookies()


    const login = async () => {
        let user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        const res = await axios.post("http://localhost:8080/login", user)
        setCookie('username', user.username)
        setCookie('Authority', res.data.authority)
        setCookie('Customer', res.data.customer)
      }
    

    return (
        <Card style={{ width: "30%", marginLeft: "35%", justifyContent: "center" }}>
            <h2 style={{ width: "100%", textAlign: "center" }}>Login</h2>
            <Form onSubmit={() => {login()} }>
                <Row style={{ justifyContent: "center" }}>
                    <Form.Label style={{ width: "25%", paddingRight: 0, fontSize: "18px" }}>Username: </Form.Label>
                    <Form.Control ref={usernameRef} style={{ width: "55%", height: "32px" }} name="Username" required={true} placeholder='' />
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Form.Label style={{ width: "25%", paddingRight: 0, fontSize: "18px" }}>Password: </Form.Label>
                    <Form.Control ref={passwordRef} style={{ width: "55%", height: "32px", inputSecurity: "disc" }} type="password" name="password" required={true} />
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Button type="submit" style={{ width: "25%", backgroundColor: "white", color: "black", border: "3px solid black" }}>Submit</Button>
                </Row>
            </Form>
        </Card>
    );
}