import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Research from "./pages/Research";
import Reachus from "./pages/Reachus";
import NoPage from "./pages/NoPage";
import Publications from "./pages/Publications";
import Login from "./pages/Login";
import Monitoring from "./pages/Monitoring";
import Policy from "./pages/Policy";
import Program from "./pages/Program";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="publications" element={<Publications />} />
        <Route path="reachus" element={<Reachus />} />
        <Route path="login" element={<Login />} />
        <Route path="research" element={<Research />} />
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="policy" element={<Policy />} />
        <Route path="program" element={<Program />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
