import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer className="mt-5">2024</footer>
    </div>
  );
}

export default App;
