import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FooterSmall from '../components/Footers/FooterSmall';
import Navbar from '../components/Navbars/AuthNavbar';
import backgroundImage from '../assets/img/register_bg_2.png';

const AuthLayout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  const from = location.state ? location.state.from : '/admin/dashboard';

  // ! user is signed in
  if (isLoggedIn) {
    return <Navigate to={from} />;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-200 bg-no-repeat bg-full"
            style={backgroundStyle}
          ></div>
          <Outlet />
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
};

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
};

export default AuthLayout;
