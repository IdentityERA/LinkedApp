import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
