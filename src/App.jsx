import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import DestinationsPage from "./pages/DestinationsPage.jsx";
import DestinationDetailPage from "./pages/DestinationDetailPage.jsx";
import MyTripsPage from "./pages/MyTripsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import './App.css'

function App() {
  return (
    <Routes>
      {/* All "normal" pages share the Layout (Navbar -> Outlet -> Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:id" element={<DestinationDetailPage />} />
        <Route path="/my-trips" element={<MyTripsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      {/* ErrorPage lives OUTSIDE the Layout route, so it renders standalone
          with no Navbar/Footer. The "*" wildcard catches any unknown path. */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;