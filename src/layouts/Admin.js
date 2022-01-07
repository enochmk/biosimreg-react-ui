import { Navigate, Routes, Route } from "react-router-dom";

// components
// import AdminNavbar from "../components/Navbars/AdminNavbar";
// import HeaderStats from "../components/Headers/HeaderStats";
import Sidebar from "../components/Sidebar/Sidebar";
import FooterAdmin from "../components/Footers/FooterAdmin";

// views
import Dashboard from "../views/admin/Dashboard";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full m-24">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
        </div>
        <FooterAdmin />
      </div>
    </>
  );
}
