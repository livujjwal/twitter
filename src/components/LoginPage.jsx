import React from "react";
import logo from "../assests/logo.svg";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:h-full flex justify-center items-center">
      <div className="lg:w-1/4 max-lg:w-1/2 max-md:w-[80%]  sm:mt-12 mt-6 mx-auto self-center">
        <img className="w-18 mb-4" src={logo} alt="Twitter Logo" />
        <h2 className="font-bold text-xl p-2 my-4">Log in to Twitter</h2>
        <input
          className="w-72 p-2 border border-[#E4EAED] rounded-md placeholder:text-xs placeholder:px-4 my-2 max-md:w-full"
          type="text"
          placeholder="Phone number, email address"
        />
        <input
          className="w-72 p-2 border border-[#E4EAED] rounded-md placeholder:text-xs placeholder:px-4 my-2 max-md:w-full"
          type="text"
          placeholder="Password"
        />
        <button className="w-72  rounded-[4rem] bg-[#1DA1F2] text-white p-2 my-4 max-md:w-full">
          Log In
        </button>
        <div className="flex justify-between items-center text-[#1Da1f2] text-xs my-6 w-72 max-md:w-full">
          <button
            className="text-[#1DA1F2] cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Forgot password?
          </button>
          <button
            className="text-[#1DA1F2] cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign up to Twitter
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
