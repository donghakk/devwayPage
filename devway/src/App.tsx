import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Devway from "../src/pages/devway";
import ByDevway from "../src/pages/byDevway";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devway" element={<Devway />} />
      <Route path="/bydevway" element={<ByDevway />} />
    </Routes>
  );
}

export default App;
