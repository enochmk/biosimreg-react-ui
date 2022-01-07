import React from "react";
import { Route, Routes } from "react-router-dom";

// layouts
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
