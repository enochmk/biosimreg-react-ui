import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

// components
// import AdminNavbar from "../components/Navbars/AdminNavbar";
// import HeaderStats from "../components/Headers/HeaderStats";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footers/FooterAdmin";

// views
import NiaRegistration from "../views/nia/Registration";
import NiaReRegistration from "../views/nia/ReRegistration";
import PassportRegistration from "../views/passport/Registration";
import PassportReRegistration from "../views/passport/ReRegistration";
import NotFound from "../views/404/NotFound";

function Index() {
  const { loggedIn } = useContext(AuthContext);

  // Redirect if user is not assigned in
  if (!loggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <section className="px-4 md:px-10 mx-auto w-full m-24 h-full min-h-screen">
          <Routes>
            <Route path="nia/registration" element={<NiaRegistration />} />
            <Route path="nia/re-registration" element={<NiaReRegistration />} />
            <Route path="passport/registration" element={<PassportRegistration />} />
            <Route path="passport/re-registration" element={<PassportReRegistration />} />
            <Route path="/" exact element={<Navigate to="/nia/registration" />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer absolute />
        </section>
      </div>
    </>
  );
}

export default Index;
