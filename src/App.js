import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Pokedex from "./Components/Pokedex";
import PokedexInfo from "./Components/PokedexInfo";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import SettingsFab from "./Components/SettingsFab";
import { useState } from "react";

function App() {
  const [itemNumbers, setItemNumbers] = useState(8);

  return (
    <HashRouter>
      <div className='container-setting-link'>
        <Link to={"/settings"}>
          <i class="fa-solid fa-gear"></i>
        </Link>
      </div>
      <div id="App">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/settings"
            element={<SettingsFab setItemNumbers={setItemNumbers} />}
          />
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/pokedex"
              element={<Pokedex itemNumbers={itemNumbers} />}
            />
            <Route path="/pokedex/:id" element={<PokedexInfo />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;