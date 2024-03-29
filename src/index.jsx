import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error";
import Logement from "./pages/FicheLogement/Logement";
import Header from "./components/Header/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />{" "}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
