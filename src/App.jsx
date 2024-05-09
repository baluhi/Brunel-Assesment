import React from "react";
import NavbarComponents from "./components/Navbar/NavbarComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import './App.css'
import MainComponent from "./components/Main/MainComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import SubmitPage from "./Pages/SubmitPage/SubmitPage";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavbarComponents />
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path="/login" element={<LoginPage />} />
<Route path="/submit" element={<SubmitPage/>}></Route>

        </Routes>
      
      
      </BrowserRouter>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
};

export default App;
