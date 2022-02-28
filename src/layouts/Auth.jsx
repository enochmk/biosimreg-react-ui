import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
// import { toast } from 'react-toastify';

import FooterSmall from '../components/Footers/FooterSmall';
import ForgotPassword from '../views/auth/ForgotPassword';
import Login from '../views/auth/Login';
import Navbar from '../components/Navbars/AuthNavbar';
import backgroundImage from '../assets/img/register_bg_2.png';

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const from = location.state
      ? location.state?.from
      : { pathname: '/admin/dashboard' };

    if (isLoggedIn) return navigate(from, { replace: true });
  }, [isLoggedIn, navigate, location]);

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
