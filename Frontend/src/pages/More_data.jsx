import React from "react";
import Navbar from "../components/Navbar";
import More from "../components/More";
import Footer from "../components/Footer";

function More_data() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <More />
      </div>
      <Footer />
    </div>
  );
}

export default More_data;
