import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* layouts */
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';

/* Views */
import Login from './views/auth/Login';
import ForgotPassword from './views/auth/ForgotPassword';
import Dashboard from './views/admin/Dashboard';
import Registration from './views/nationalId/Registration';
import Linking from './views/nationalId/BasicLink';
import MfsRegistration from './views/nationalId/MfsRegistration';
import SubscriberStatus from './views/SubscriberStatus/SubscriberStatus';
import NotFound from './views/others/NotFound';
import Unauthorized from './views/others/Unauthorized';
import PersistLogin from './components/Others/PersistLogin';

const App = () => {
  return (
    <>
      <Routes>
        {/* User not logged  */}
        <Route element={<PersistLogin />}>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>

        {/* Private Routes: User should be logged in  */}
        <Route element={<PersistLogin />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="register" element={<Registration />} />
            <Route path="linking" element={<Linking />} />
            <Route path="register-mfs" element={<MfsRegistration />} />
            <Route path="subscriber-status" element={<SubscriberStatus />} />
            <Route path="unauthorized" element={<Unauthorized />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="/notfound" element={<NotFound />} />
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
