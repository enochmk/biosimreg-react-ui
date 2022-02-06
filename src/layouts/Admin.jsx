import { useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AuthContext from '../context/auth/AuthContext';
import Dashboard from '../views/admin/Dashboard';
import PassportRegistration from '../views/passport/Registration';
import PassportModification from '../views/passport/Modification';
import NiaRegistration from '../views/nationalID/Registration';
import NiaRegistrationMfs from '../views/nationalID/RegistrationMFS';
import NiaModification from '../views/nationalID/Modification';
import NiaModificationSecurity from '../views/nationalID/ModificationSecurity';

function Admin() {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // user is not signed in
  useEffect(() => {
    if (!loggedIn) {
      toast.error('You are not logged in. Please log in');
      return navigate('/auth/login');
    }
  }, [loggedIn, navigate]);

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nationalId/registration" element={<NiaRegistration />} />
      <Route
        path="/nationalId/mfs-registration"
        element={<NiaRegistrationMfs />}
      />
      <Route path="/nationalId/modification" element={<NiaModification />} />
      <Route
        path="/nationalId/security-modification"
        element={<NiaModificationSecurity />}
      />
      <Route path="/passport/registration" element={<PassportRegistration />} />
      <Route path="/passport/modification" element={<PassportModification />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}

export default Admin;
