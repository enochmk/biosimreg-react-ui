import { Routes, Route, Navigate } from 'react-router-dom';

import ForgotPassword from '../views/auth/ForgotPassword';
import Login from '../views/auth/Login';
import backgroundImage from '../assets/img/register_bg_2.png';

function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/*" element={<Navigate to="/notfound" />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Auth;
