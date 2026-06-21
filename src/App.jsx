import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import Services from "./components/services.jsx";
import ServicePage from "./components/servicepage.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Form from "./components/form.jsx";
import Main from "./components/home.jsx";
import Gallery from "./components/gallery.jsx";
import Loader from "./components/loader.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    // Show loader on first session visit only.
    return !sessionStorage.getItem("qc:visited");
  });

  return (
    <>
      {loading && (
        <Loader
          onDone={() => {
            sessionStorage.setItem("qc:visited", "1");
            setLoading(false);
          }}
        />
      )}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Header />}>
            <Route index element={<Main />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServicePage />} />
            <Route path="/enquiry" element={<Form />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
