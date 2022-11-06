import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";

import "./sass/main.scss";
import { ToastContainer } from "react-toastify";
import Studio from "./Components/Studio/Studio";
import { HeaderNavNames } from "./Components/AppBar/Navigation/HeaderNavNames";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Studio />} />
          <Route
            path={`${HeaderNavNames.PORTFOLIO}`}
            element={<h1>Portfolio</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
