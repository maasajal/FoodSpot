import React, { useContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import AddBook from "./pages/AddBook";
import NewBooks from "./pages/NewBooks";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new-food" element={<NewBooks />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="admin" element={<RequireAuth><AdminNews /></RequireAuth>} /> */}
        <Route path="/add-food" element={<AddBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "2rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
