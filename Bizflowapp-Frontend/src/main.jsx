import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Outlet} from 'react-router-dom';
import App from "./App.jsx";
import About from "./About.jsx";
import Signin from "./Signin.jsx";
import Welcome from "./welcome.jsx";
import Home from "./Home.jsx";
import Task from "./Task.jsx";

function LayoutWithNavbar() {
  return (
    <>
      <App />
      <Outlet />
    </>
  );
}
function Navbarwelcome() {
  return (
    <>
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

      <Route element={<Navbarwelcome />}>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/task" element={<Task />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
   
);