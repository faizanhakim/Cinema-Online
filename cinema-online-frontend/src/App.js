import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

//components
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";

//pages
import Login from "./pages/Authentication/Login"
import Signup from "./pages/Authentication/Signup"
import Home from "./pages/Home/Home"




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route index exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
