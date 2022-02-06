import { useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import AuthContext from '../context/auth/AuthContext';
import ForgotPassword from '../views/auth/ForgotPassword';
import Login from '../views/auth/Login';
import backgroundImage from '../assets/img/register_bg_2.png';
import { toast } from 'react-toastify';

function Auth() {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // user is already signed in
  useEffect(() => {
    if (loggedIn) {
      toast.error('You are already logged in');
      return navigate('/admin/dashboard');
    }
  }, [loggedIn, navigate]);

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={backgroundStyle}
          ></div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<Navigate to="/notfound" />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
};

export default Auth;
