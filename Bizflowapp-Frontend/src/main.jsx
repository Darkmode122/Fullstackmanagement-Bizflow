import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './App.css';
import About from "./About.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
        
        <Route path="/about" element={<About />} />
        
    </Routes>
  </BrowserRouter>

 
);