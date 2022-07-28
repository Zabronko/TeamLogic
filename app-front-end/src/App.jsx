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
        <Nav.Link href="/customers">Customers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/customerInfo">CustomerInfo </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/warehouses">Warehouses</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/warehouseInfo">WarehouseInfo</Nav.Link>
      </Nav.Item>
    </Navigation>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path ="/customerInfo" element={<CustomerInfo />}></Route>
        <Route path ="/warehouses" element={<Warehouses />}></Route>
        <Route path ="/warehouseInfo" element={<WarehouseInfo />}></Route>
    </Routes>
</BrowserRouter>
</>
  );
}

export default App;
