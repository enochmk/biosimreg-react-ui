import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { getStats } from '../features/stats/statsSlice';
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
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { personalStats } = useSelector((state) => state.stats);

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/auth/login');
    }

    // dispatch(getStats(user));
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Sidebar title="AirtelTigo BIOSIMREG v2" />
      <main className="relative md:ml-64">
        <AdminNavbar />
        {/* <HeaderStats data={personalStats.stats} /> */}
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
