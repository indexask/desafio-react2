import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navegacion from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalle from "./views/Detalle"
import './App.css'


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}