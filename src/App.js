import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Calculator from "./pages/calculator/calculator";
import ToDo from "./pages/todo/todo";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
