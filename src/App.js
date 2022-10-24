import { Route, Routes } from "react-router-dom";
import "./App.css";
import Studio from "./Components/AppBar/Studio/Studio";
import Cont from "./Components/Cont/Cont";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";

import "./files/HW8-2/sass/main.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="studio" element={<Studio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="cont" element={<Cont />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
