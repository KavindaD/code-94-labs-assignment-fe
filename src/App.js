import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// components
import Product from "./components/product";
import ProductsList from "./components/products-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Router>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <div className="d-flex place-content-end">
          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
