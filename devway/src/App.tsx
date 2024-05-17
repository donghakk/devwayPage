import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Devway from "./pages/devway";
import ByDevway from "./pages/byDevway";
import FAQ from "./pages/faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devway" element={<Devway />} />
      <Route path="/bydevway" element={<ByDevway />} />
      <Route path="/faq" element={<FAQ/>} />
    </Routes>
  );
}

export default App;
