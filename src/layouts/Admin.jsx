import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../views/admin/Dashboard';
import PassportRegistration from '../views/passport/Registration';
import PassportModification from '../views/passport/Modification';
import NiaRegistration from '../views/nationalID/Registration';
import NiaRegistrationMfs from '../views/nationalID/RegistrationMFS';
import NiaModification from '../views/nationalID/Modification';
import NiaModificationSecurity from '../views/nationalID/ModificationSecurity';

function Admin() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nationalId/registration" element={<NiaRegistration />} />
      <Route path="/nationalId/mfs-registration" element={<NiaRegistrationMfs />} />
      <Route path="/nationalId/modification" element={<NiaModification />} />
      <Route path="/nationalId/security-modification" element={<NiaModificationSecurity />} />
      <Route path="/passport/registration" element={<PassportRegistration />} />
      <Route path="/passport/modification" element={<PassportModification />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}

export default Admin;
