import React from "react";
import LandingPage from "./assets/Components/LandingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";
import TaskPage from "./assets/Components/TaskPage";
import ContactUs from "./assets/Components/ContactUs";
import Services from "./assets/Components/Services";
import Entries from "./assets/Components/Entries";
import OurServices from "./assets/Components/OurServices";
import Footer from "./assets/Components/Footer";
const App = () => {
  return (
    <>
      <div className="w-full  bg-[#8704ff]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/TaskPage" element={<TaskPage />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
        <LandingPage />
      </div>
      <Entries />
      <OurServices />
      <Footer />
    </>
  );
};

export default App;
