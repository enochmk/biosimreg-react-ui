import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './layouts/Admin';
import Auth from './layouts/Auth';
import NotFound from './views/notFound/NotFound';

import Index from './views/others/Index';

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/" element={<Index />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate from="*" to="/" />} />
    </Routes>
  );
}

export default App;
