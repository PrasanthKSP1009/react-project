import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyClassComp from "./components/ClassComponent.jsx";
import FuncComp from "./components/funcComp.jsx";
// import MyClassComp from "./components/classComponent.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
// import Effect from "./components/effect.jsx";
import SideEffects from "./components/useEffect.jsx";
import UseRef from "./components/UseRef.jsx";
import SignupForm from "./components/Signup.jsx";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/fun" element={<FuncComp />}></Route>
        <Route path="/class" element={<MyClassComp />}></Route>
        <Route path="/eff" element={<SideEffects />}></Route>
        <Route path="/ref" element={<UseRef />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
