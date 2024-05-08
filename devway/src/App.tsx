import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Devway from "./pages/devway";
import ByDevway from "./pages/byDevway";

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
