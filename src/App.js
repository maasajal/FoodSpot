import React, { useContext, Fragment } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Customs components here
import Header from "./components/header/Header";
import Footer from "./components/Footer";
// Several pages import here
import Home from "./pages/home/Home";
import TodayMeal from "./pages/today'sMeal/TodayMeal";
import NewFood from "./pages/newFood/NewFood";
import AddFood from "./pages/addFood/AddFood";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/addFood/authFirebase/Login";
import SignUp from "./pages/addFood/authFirebase/SignUp";
import { AuthProvider } from "./pages/addFood/authFirebase/Auth";
import PrivateRoute from "./pages/addFood/authFirebase/PrivateRoute";
import LogIn from "./pages/addFood/admin/Login";
import { AuthContext } from "./pages/addFood/admin/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <Fragment>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/today-meal" element={<TodayMeal />} />
          <Route path="/new-food" element={<NewFood />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/add-recipe" element={<RequireAuth><AddFood /></RequireAuth>} /> */}

          {/* <PrivateRoute exact path="/add-recipe" element={<AddFood />} /> */}
          {/* <Route path="/add-recipe" element={<PrivateRoute />}>
            <Route path="/add-recipe" element={<AddFood />} />
          </Route> */}
          {/* <Route
            element={
              <PrivateRoute>
                <Route path="/add-recipe" element={<AddFood />} />
              </PrivateRoute>
            }
          /> */}

          <Route path="/add-recipe" element={<AddFood />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
      </AuthProvider>
    </Fragment>
  );
};

export default App;
