import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Home from "./PAGES/HOME/Home";
import { useState } from "react";
import Login from "./COMPONENTS/LOGIN/Login";
import Cart from "./PAGES/CART/Cart";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  console.log(showLogin);

  return (
    <>
      <div className="app">
        {showLogin ? (
          <Login showLogin={showLogin} setShowLogin={setShowLogin} />
        ) : (
          <></>
        )}
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
