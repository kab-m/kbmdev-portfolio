import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Homepage, NotFound } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* navbar */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
