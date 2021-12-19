import React from "react";
import Navbar from "../components/navbar";
import Form from "../components/form";

function HomePage() {
  return (
    <div className="h-screen bg-body-color text-white overflow-hidden">
      <Navbar />
      <div className="h-5/6 flex justify-center items-center">
        <Form />
      </div>
    </div>
  );
}

export default HomePage;
