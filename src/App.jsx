import { Routes, Route } from 'react-router-dom';
import Admin from './layouts/Admin';
import Auth from './layouts/Auth';
import NotFound from './views/notFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
