import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Dashboard, Navbar } from "@/widgets/layout";
import Loader from "./pages/Loader";


function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
