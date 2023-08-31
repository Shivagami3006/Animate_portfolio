import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import Service from "./service";
import About from "./about";
import Contact from "./contact";
import Project from "./project";
import Skills from "./skills";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path ="/project" element={<Project/>}/>
        <Route path ="/skills" element={<Skills/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
