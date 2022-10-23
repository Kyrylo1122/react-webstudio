import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Pages/Portfolio";

import "./files/HW8-2/sass/main.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="portfolio" element={<Portfolio />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
