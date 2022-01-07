import React from "react";
import { Route, Routes } from "react-router-dom";

// layouts
import Auth from "./layouts/Auth";
import Index from "./layouts/Index";

// Views
import NotFound from "./views/404/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Index />} />
      </Routes>
    </>
  );
};

export default App;
