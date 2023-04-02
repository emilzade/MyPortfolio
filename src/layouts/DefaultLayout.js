import Navbar from "../components/navbar";
import Landing from "../components/landing";
import Services from "../components/services";
import About from "../components/about";
import Sertificates from "../components/sertificates";
import Home from "../components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function DefaultLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="sertificates" element={<Sertificates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default DefaultLayout;
