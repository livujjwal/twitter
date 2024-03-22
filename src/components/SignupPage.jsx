import React from "react";
import logo from "../assests/logo.svg";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex justify-center mx-auto max-lg:h-[70%] max-lg:mt-8">
      <div className="w-96 h-[90%] item-center flex flex-col item-center justify-center px-6 ">
        <img className="w-6 mb-4 self-center" src={logo} alt="Twitter Logo" />
        <h2 className="font-bold text-left text-lg  my-1">Create an account</h2>
        <input
          className="w-full p-2 border border-[#E4EAED] rounded-md placeholder:text-xs placeholder:px-4 my-2 mx-auto"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full p-2 border border-[#E4EAED] rounded-md placeholder:text-xs placeholder:px-4 my-2 mx-auto"
          type="text"
          placeholder="Phone number"
        />
        <p
          className="text-[#1DA1F2] cursor-pointer text-left font-semibold text-[0.68rem] my-2"
          onClick={() => {
            navigate("/login");
          }}
        >
          Use Email
        </p>
        <p className="font-bold text-[0.7rem] my-2">Date of birth</p>
        <p className="text-[0.58rem]">
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus.
        </p>
        <div className="flex justify-between items-center my-6 ">
          <select
            className="text-xs w-40 bg-transparent border border-[#E4EAED] rounded-md py-[0.7rem] px-4"
            placeholder="Month"
          >
            <option className="text-sm text-[#E4EAED] w-28" value="Month">
              Month
            </option>
          </select>
          <select
            className="text-xs  w-20 bg-transparent border border-[#E4EAED] rounded-md py-[.7rem] px-4"
            placeholder="Month"
          >
            <option className="text-xs text-[#E4EAED] w-28" value="Month">
              Day
            </option>
          </select>
          <select
            className="text-xs  w-20 bg-transparent border border-[#E4EAED] rounded-md py-[.7rem] px-4"
            placeholder="Month"
          >
            <option value="Month">Year</option>
          </select>
        </div>
        <button className="w-full  rounded-[4rem] bg-[#1DA1F2] text-white p-1 my-4 mx-auto">
          Next
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
