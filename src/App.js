import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";

import "./sass/main.scss";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";

const Studio = lazy(() => import("./Components/Studio/Studio"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Studio />} />
          <Route path="studio" element={<Studio />} />

          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
