import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Outlet} from 'react-router-dom';
import App from "./App.jsx";
import About from "./About.jsx";
import Signin from "./Signin.jsx";
import Welcome from "./welcome.jsx";
import Home from "./Home.jsx";

function LayoutWithNavbar() {
  return (
    <>
      <App />
      <Outlet />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(  
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutWithNavbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
      </Route>

      <Route path="/welcome" element={<Welcome />} />

    </Routes>
  </BrowserRouter>
   
);