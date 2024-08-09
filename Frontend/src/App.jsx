import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import More_data from "./pages/More_data";
import Signup from "./components/Signup";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/More" element={<More_data />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/Contact" element={<More_data />} /> */}
      </Routes>
    </>
  );
}

export default App;
