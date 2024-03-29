import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destinos from "./components/Destinos";
import DetalheDestino from "./components/DetalheDestino";
import Header from "./components/Header";
import Home from "./components/Home";
//import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        {/*  <Navbar /> */}
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/detalhe" element={<DetalheDestino />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
