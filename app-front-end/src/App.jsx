import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Customers, CustomerInfo, Warehouses, WarehouseInfo, Home} from "./pages"
import { Nav } from 'react-bootstrap';
import { Navigation } from './components/Navigation';


function App() {
  return (
<>
<BrowserRouter>
  <Navigation>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Customers">Customers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/CustomerInfo">CustomerInfo </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Warehouses">Warehouses</Nav.Link>
      </Nav.Item>
    </Navigation>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path ="/CustomerInfo" element={<CustomerInfo />}></Route>
        <Route path ="/Warehouses" element={<Warehouses />}></Route>
        <Route path ="/Warehouses/*" element={<WarehouseInfo />}></Route>
    </Routes>
</BrowserRouter>
</>
  );
}

export default App;
