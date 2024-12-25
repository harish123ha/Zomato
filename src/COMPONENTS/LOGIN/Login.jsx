import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Login.css";

function Login({ showLogin, setShowLogin }) {
  const [currLogin, setCurrLogin] = useState("signup");
  console.log(currLogin);

  return (
    <>
      <div className="login_popup w-screen ">
        <form className="login_popup_container">
          <div className="flex justify-between items-center">
            {currLogin === "signup" ? (
              <div className="font-bold text-2xl text-black">Sign Up</div>
            ) : (
              <div className="font-bold text-2xl text-black">Login</div>
            )}

            <img
              className="font-extrabold cursor-pointer"
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col mt-7 gap-5 justify-center items-center">
              {currLogin === "signup" ? (
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
              ) : (
                <></>
              )}

              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="input input-bordered input-secondary w-full max-w-xs"
              />

              <input
                name="password"
                type="password"
                placeholder="Your Password"
                className="input input-bordered input-secondary w-full max-w-xs"
              />
            </div>

            <div className="flex justify-center items-center mt-4">
              {currLogin === "signup" ? (
                <button
                  type="submit"
                  className="w-[95%] py-3 px-3 bg-[tomato] text-[white] rounded-lg text-xl  hover:opacity-90 active:scale-95 font-semibold"
                >
                  Create account
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-[95%] py-3 px-3 bg-[tomato] text-[white] rounded-lg text-xl  hover:opacity-90 active:scale-95 font-semibold"
                >
                  Login
                </button>
              )}
            </div>
            <div className="ms-3 mt-5 text-[15px]">
              {currLogin === "signup" ? (
                <p className="font-bold">
                  Alreacy have an account?
                  <span
                    onClick={() => setCurrLogin("login")}
                    className="text-[tomato] font-extrabold cursor-pointer"
                  >
                    Login here
                  </span>
                </p>
              ) : (
                <p className="font-bold">
                  Create a new account?
                  <span
                    onClick={() => setCurrLogin("signup")}
                    className="text-[tomato] font-extrabold cursor-pointer"
                  >
                    Click here
                  </span>
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
