import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Room from "./pages/home/room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
