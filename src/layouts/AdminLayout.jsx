import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Sidebar from '../components/Sidebars/Sidebar';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import FooterAdmin from '../components/Footers/FooterAdmin';

const AdminLayout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  // ! user not signed in
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Sidebar title="AirtelTigo BIOSIMREG" />
      <main className="relative md:ml-64">
        <AdminNavbar />
        <Outlet />
        <FooterAdmin />
      </main>
    </>
  );
};

export default AdminLayout;
