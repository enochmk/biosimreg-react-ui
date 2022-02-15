import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import FooterSmall from '../components/Footers/FooterSmall';
import ForgotPassword from '../views/auth/ForgotPassword';
import Login from '../views/auth/Login';
import Navbar from '../components/Navbars/AuthNavbar';
import backgroundImage from '../assets/img/register_bg_2.png';
import { toast } from 'react-toastify';

function Auth() {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.value.loggedIn);

  // user is already signed in
  useEffect(() => {
    if (loggedIn) {
      // toast.error('You are already logged in');
      return navigate('/admin/dashboard');
    }
  }, [loggedIn, navigate]);

  return (
    <>
      <Navbar />

      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-200 bg-no-repeat bg-full"
            style={backgroundStyle}
          ></div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<Navigate to="/notfound" />} />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
};

export default Auth;
