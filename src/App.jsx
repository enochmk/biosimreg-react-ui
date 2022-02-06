import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/auth/AuthContext';
import Admin from './layouts/Admin';
import Auth from './layouts/Auth';
import NotFound from './views/notFound/NotFound';

import Index from './views/others/Index';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/" element={<Index />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate from="*" to="/" />} />
        </Routes>
      </AuthProvider>

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
}

export default App;
