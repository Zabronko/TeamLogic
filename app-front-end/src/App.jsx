import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Customers, CustomerInfo, Headquarters, HeadquartersInfo, Home, ShippingRoutes, RoutesInfo} from "./pages"

import './App.css';

function App() {
  return (
<>
<BrowserRouter>

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
