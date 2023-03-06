import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destinos from "./components/Destinos";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
