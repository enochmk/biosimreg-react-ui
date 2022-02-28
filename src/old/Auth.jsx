import { Routes, Route, Navigate } from 'react-router-dom';

import FooterSmall from '../components/Footers/FooterSmall';
import ForgotPassword from '../views/auth/ForgotPassword';
import Login from '../views/auth/Login';
import Navbar from '../components/Navbars/AuthNavbar';
import backgroundImage from '../assets/img/register_bg_2.png';

const Auth = () => {
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
};

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
};

export default Auth;
