import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Customers, CustomerInfo, Warehouses, WarehouseInfo, Home, PackageMasterList, TruckMasterList, SignupPage, SigninPage, CustomerPortalPackages, CustomerOrderPage, CustomerPortalProfile } from "./pages"
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Navigation } from './components/Navigation';
import { useCookies } from "react-cookie";
import axios from 'axios';
import {useEffect} from 'react';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies('Authority');
  axios.defaults.crossDomain = true
  axios.defaults.withCredentials = true

  const logout = async() => {
    await fetch("http://localhost:8080/logout", {
      mode: "no-cors"
    })
      .then(res => {
        removeCookie("Authority")
        setCookie("JSESSIONID",undefined)
        removeCookie("Customer")
        removeCookie("username")
      })
  }

  useEffect(() => {
    if(window.location.href.includes('/signin') & cookies['Authority'] !== undefined) {
      window.location.href = "http://localhost:3000"
    }
  },[])

  if (cookies["Authority"] === "ROLE_ADMIN") {
    return (
      <>
        <BrowserRouter>
          <Navigation>
            <Navbar.Brand href="/">DZ logistics</Navbar.Brand>
            <Container fluid>
              <Nav as="h3" variant="tabs" >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/customers">Customers</Nav.Link>
                <Nav.Link href="/packages">Packages</Nav.Link>
                <Nav.Link href="/warehouses">Warehouses</Nav.Link>
                <Nav.Link href="/trucks">Trucks</Nav.Link>
              </Nav>
              <Nav>
                <Button onClick={() => { logout() }} href="/" variant="outline-secondary">Logout</Button>
              </Nav>
            </Container>
          </Navigation>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/*" element={<CustomerInfo />}></Route>
            <Route path="/Warehouses" element={<Warehouses />}></Route>
            <Route path="/Warehouses/*" element={<WarehouseInfo />}></Route>
            <Route path="/packages" element={<PackageMasterList />}></Route>
            <Route path="/trucks" element={<TruckMasterList />}></Route>
            <Route path="/*" element={<Home />}></Route>

          </Routes>
        </BrowserRouter>
      </>
    );
  } else if (cookies["Authority"] === "ROLE_USER") {
    return (
      <>
        <BrowserRouter>
          <Navigation>
            <Navbar.Brand href="/">DZ logistics</Navbar.Brand>
            <Container fluid>
              <Nav as="h3" variant="tabs" >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href='/CustomerProfile'>My Profile</Nav.Link>
                <Nav.Link href='/CustomerPackages'>My Packages</Nav.Link>
                <Nav.Link href='/CustomerOrder'>Order</Nav.Link>
              </Nav>
              <Nav>
                <Button onClick={() => {logout()}} href="/" variant="outline-secondary">Logout</Button>
              </Nav>
            </Container>
          </Navigation>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CustomerProfile" element={<CustomerPortalProfile />} />
            <Route path="/CustomerPackages" element={<CustomerPortalPackages />} />
            <Route path="/CustomerOrder" element={<CustomerOrderPage />} />
            <Route path="/*" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  } else if (cookies["Authority"] === undefined) {
    return (
      <>
        <BrowserRouter>
          <Navigation>
            <Navbar.Brand href="/">DZ logistics</Navbar.Brand>
            <Container fluid>
              <Nav as="h3" variant="tabs" >
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
              <Nav>
                <Button href="/signin" variant="outline-secondary">Sign In</Button>
                <Button href="/signup" variant="outline-secondary">Sign Up</Button>
              </Nav>
            </Container>
          </Navigation>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/signin" element={<SigninPage/>}></Route>
            <Route path="/*" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
