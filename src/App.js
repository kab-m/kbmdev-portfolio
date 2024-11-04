import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Homepage, NotFound, Other } from "./pages/index";
import { NavBar, Loading, Footer } from "./components/index";
import "./i18n";
import useContentful from "./hooks/useContentful";

function App() {
  const { content, loading } = useContentful();

  const [minLoadTime, setMinLoadTime] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadTime(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !minLoadTime) {
    return <Loading />;
  }

  // if (!content && !loading) {
  //   // return error component here
  // }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage content={content} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
