import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import Services from "./component/Services";
import Subscription from "./component/Subscription";
import Discussion from "./component/Discussion";
import Navbar from "./component/Navbar";
import SellWithUs from "./component/sellWithUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="/Discussion" element={<Discussion/>} />
          <Route path="/sellwithus" element={<SellWithUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
