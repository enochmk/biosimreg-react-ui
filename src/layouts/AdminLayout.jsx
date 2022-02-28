import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Sidebar from '../components/Sidebars/Sidebar';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import HeaderStats from '../components/Headers/HeaderStats';
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
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full m-24">
          <Outlet />
          <FooterAdmin />
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
