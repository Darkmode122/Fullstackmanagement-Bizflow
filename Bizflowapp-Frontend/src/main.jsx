import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './App.css';
import About from "./About.jsx";
import Signin from "./Signin.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
        
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        
    </Routes>
  </BrowserRouter>

 
);