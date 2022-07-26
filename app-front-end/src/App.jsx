import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Customers, CustomerInfo, Headquarters, HeadquartersInfo, Home, ShippingRoutes, RoutesInfo} from "./pages"
import { Nav } from 'react-bootstrap';
import { Navigation } from './components/Navigation';


function App() {
  return (
<>
<BrowserRouter>
  <Navigation>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>

        <Nav.Link href="/Customers">Customers</Nav.Link>

        <Nav.Link href="/CustomerInfo">CustomerInfo </Nav.Link>

        <Nav.Link href="/Headquarters">Headquarters</Nav.Link>

        <Nav.Link href="/HeadquartersInfo">HeadquartersInfo</Nav.Link>
 
        <Nav.Link href="/ShippingRoutes">ShippingRoutes</Nav.Link>

        <Nav.Link href="/RoutesInfo">RoutesInfo</Nav.Link>
      </Nav.Item>
    </Navigation>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path ="/CustomerInfo" element={<CustomerInfo />}></Route>
        <Route path ="/Headquarters" element={<Headquarters />}></Route>
        <Route path ="/HeadquartersInfo" element={<HeadquartersInfo />}></Route>
        <Route path ="/ShippingRoutes" element={<ShippingRoutes />}></Route>
        <Route path ="/RoutesInfo" element={<RoutesInfo />}></Route>
    </Routes>
</BrowserRouter>
</>
  );
}

export default App;
