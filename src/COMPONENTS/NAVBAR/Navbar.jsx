import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../CONTEXT/StoreContext";

function Navbar({ showLogin, setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { getCartTotal } = useContext(StoreContext);

  return (
    <>
      <nav className="py-3 flex justify-between items-center ">
        <div className="sm:w-[8rem] w-[5rem]">
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
        </div>
        <div className="hide flex gap-2 sm:gap-3 font-medium text-[#49557e] text-[0.6rem] sm:text-[1rem]">
          <div
            onClick={() => setMenu("Home")}
            className={`cursor-pointer ${menu === "Home" ? "active" : ""}`}
          >
            <a href="/"> Home</a>
          </div>
          <div
            onClick={() => setMenu("Menu")}
            className={`cursor-pointer ${menu === "Menu" ? "active" : ""}`}
          >
            <a href="#menu">Menu</a>
          </div>
          <div
            onClick={() => setMenu("mobile-app")}
            className={`cursor-pointer ${
              menu === "mobile-app" ? "active" : ""
            }`}
          >
            <a href="#mobile-app"> mobile-app</a>
          </div>
          <div
            onClick={() => setMenu("Contact-us")}
            className={`cursor-pointer ${
              menu === "Contact-us" ? "active" : ""
            }`}
          >
            <a href="#footer">Contact-us</a>
          </div>
        </div>
        <div className="basket flex gap-2 sm:gap-5 items-center ">
          <img
            src={assets.search_icon}
            alt=""
            className="w-[1rem] sm:w-[1.8rem]"
          />

          <Link to="/cart">
            {" "}
            <img
              src={assets.basket_icon}
              alt=""
              className="w-[1rem] sm:w-[1.8rem]"
            />
            {getCartTotal() > 0 ? <p className="dot"></p> : ""}
          </Link>
          <button
            onClick={() => setShowLogin(true)}
            className=" px-3 py-[2px] sm:px-7 sm:py-2 border rounded-3xl text-[#49557e] border-[tomato] hover:bg-[#fff4f2] transition duration-300 active:scale-90"
          >
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
