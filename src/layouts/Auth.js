import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

// components
import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";

// views
import Login from "../views/auth/Login";

export default function Auth() {
  const { loggedIn } = useContext(AuthContext);

  // Redirect if user is logged in.
  if (loggedIn) {
    return <Navigate to="/nia/registration" />;
  }

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
            <Route path="/" element={<Navigate to="/auth/login" />} />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
