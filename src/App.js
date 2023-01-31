import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Add from "./pages/Add/Add";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/single" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
