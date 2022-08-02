import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Customers, CustomerInfo, Warehouses, WarehouseInfo, Home, PackageMasterList, TruckMasterList} from "./pages"
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
        <Nav.Link href="/warehouses">Warehouses</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/packages">Packages</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/trucks">Trucks</Nav.Link>
      </Nav.Item>
    </Navigation>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path ="/customers/*" element={<CustomerInfo />}></Route>
        <Route path ="/Warehouses" element={<Warehouses />}></Route>
        <Route path ="/Warehouses/*" element={<WarehouseInfo />}></Route>
        <Route path ="/packages" element={<PackageMasterList />}></Route>
        <Route path ="/trucks" element={<TruckMasterList />}></Route>
    </Routes>
</BrowserRouter>
</>
  );
}

export default App;
