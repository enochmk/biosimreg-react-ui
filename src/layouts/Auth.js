import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";

// views
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

function Auth() {
  return (
    <>
      <Navbar transparent={false} />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url(" + require("../assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/auth/login" />} />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}

export default Auth;
