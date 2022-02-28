import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* layouts */
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';

/* Views */
import Login from './views/auth/Login';
import ForgotPassword from './views/auth/ForgotPassword';
import Dashboard from './views/admin/Dashboard';
import NiaRegistration from './views/nationalID/Registration';
import NiaModification from './views/nationalID/Modification';
import NiaRegistrationMfs from './views/nationalID/RegistrationMFS';
import NotFound from './views/notFound/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/notfound" element={<NotFound />} />

        {/* User not logged  */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Private Routes: User should be logged in  */}
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="registration" element={<NiaRegistration />} />
          <Route path="mfs-registration" element={<NiaRegistrationMfs />} />
          <Route path="modification" element={<NiaModification />} />
        </Route>

        {/* catch all */}
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
        <Route path="*" element={<Navigate from="*" to="/notfound" />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
