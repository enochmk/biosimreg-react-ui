import { Routes, Route, Navigate } from 'react-router-dom';

import ForgotPassword from '../views/auth/ForgotPassword';
import Login from '../views/auth/Login';

function Auth() {
  return (
    <>
      <h2>Hello Auth</h2>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/*" element={<Navigate to="/notfound" />} />
      </Routes>
    </>
  );
}

export default Auth;
