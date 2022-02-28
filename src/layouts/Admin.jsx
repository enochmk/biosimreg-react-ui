import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { updateStats } from '../features/stats/statsSlice';
import { logout } from '../features/auth/authSlice';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Sidebar from '../components/Sidebars/Sidebar';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import HeaderStats from '../components/Headers/HeaderStats';
import FooterAdmin from '../components/Footers/FooterAdmin';
import Dashboard from '../views/admin/Dashboard';
import NiaModification from '../views/nationalID/Modification';
import NiaModificationSecurity from '../views/nationalID/ModificationSecurity';
import NiaRegistration from '../views/nationalID/Registration';
import NiaRegistrationMfs from '../views/nationalID/RegistrationMFS';
import PassportModification from '../views/passport/Modification';
import PassportRegistration from '../views/passport/Registration';

function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const statistics = useSelector((state) => state.statistics.data);

  // ! not logged in, redirect to login
  useEffect(() => {
    if (!isLoggedIn)
      return navigate(
        '/auth/login',
        { state: { from: location } },
        { replace: true },
      );
  }, [isLoggedIn, navigate, location]);

  // update stats
  useEffect(() => {
    const getStatistics = async () => {
      try {
        const response = await axiosPrivate.get('/profile/stats');
        dispatch(updateStats(response.data));
      } catch (error) {
        let message = error.response?.data?.message || error.message;
        toast.error(message);
        dispatch(logout());
      }
    };

    getStatistics();
  }, [isLoggedIn, navigate, dispatch, axiosPrivate]);

  return (
    <>
      <Sidebar title="AirtelTigo BIOSIMREG" />
      <main className="relative md:ml-64">
        <AdminNavbar />
        <HeaderStats data={statistics} />
        <div className="px-4 md:px-10 mx-auto w-full m-24">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/nationalId/registration"
              element={<NiaRegistration />}
            />
            <Route
              path="/nationalId/mfs-registration"
              element={<NiaRegistrationMfs />}
            />
            <Route
              path="/nationalId/modification"
              element={<NiaModification />}
            />
            <Route
              path="/nationalId/security-modification"
              element={<NiaModificationSecurity />}
            />
            <Route
              path="/passport/registration"
              element={<PassportRegistration />}
            />
            <Route
              path="/passport/modification"
              element={<PassportModification />}
            />
          </Routes>
          <FooterAdmin />
        </div>
      </main>
    </>
  );
}

export default Admin;
