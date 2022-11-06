import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";

import "./sass/main.scss";
import { ToastContainer } from "react-toastify";
import Studio from "./Components/Studio/Studio";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Studio />} />

          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
