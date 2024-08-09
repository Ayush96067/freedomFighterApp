import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import More_data from "./pages/More_data";
import Signup from "./components/Signup";
import Contact from "./pages/Contact";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/More"
          element={authUser ? <More_data /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/Contact" element={<More_data />} /> */}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
