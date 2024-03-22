import React from "react";
import hero from "../assests/hero.svg";
import logo from "../assests/logo.svg";
import appleLogo from "../assests/logo-apple 1.svg";
import googleLogo from "../assests/google-icon 1.svg";
import { FOOTER } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen sm:h-screen ">
      <div className="w-full sm:h-[90%] flex items-center max-sm:flex-col">
        <div className="w-[60%] sm:h-full max-sm:w-full">
          <img
            className="w-full h-full  object-cover"
            src={hero}
            alt="hero-image-twitter"
          />
        </div>
        <div className="w-[40%] flex flex-col items-start px-14 max-sm:w-full max-sm:my-4 max-sm:px-4 max-sm:mx-auto">
          <img src={logo} alt="twitter-logo my-6" />
          <h1 className="text-5xl font-extrabold my-4">Happening now</h1>
          <h2 className="text-xl font-extrabold my-4">Join Twitter today</h2>
          <div className="flex flex-col items-center  gap-4 my-4 max-sm:mx-auto">
            <button
              className="p-2 border border-[#E4EAED] rounded-xl w-60 text-[12px] font-bold"
              onClick={() => {
                navigate("/signup");
              }}
            >
              <img
                className="w-8 px-2 inline items-center object-contain mt-[-2.8px]"
                src={googleLogo}
                alt="google-log"
              />
              Sign up with Google
            </button>
            <button
              className="p-2 border border-[#E4EAED] rounded-xl w-60 text-[12px] font-bold max-sm:w-full"
              onClick={() => {
                navigate("/signup");
              }}
            >
              <img
                className="w-8 px-2 inline items-center object-contain mt-[-2.8px]"
                src={appleLogo}
                alt="google-log"
              />
              Sign up with Apple
            </button>
            <button
              className="p-2 border border-[#E4EAED] rounded-xl w-60 text-[12px] font-bold"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up with phone or email
            </button>
          </div>
          <p className="text-xs my-4">
            By singing up you agree to the{" "}
            <span className="text-[#1DA1F2]">Terms of Service</span> and{" "}
            <span className="text-[#1DA1F2]">Privacy Policy</span>, including{" "}
            <span className="text-[#1DA1F2]">Cookie Use.</span>{" "}
          </p>
          <p className="text-sm">
            Already have an account?{" "}
            <button
              className="text-[#1DA1F2] cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in.
            </button>{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around w-[90%] mx-auto my-4 max-lg:flex-wrap">
        {FOOTER.map((item) => (
          <p className="text-[0.65rem]" key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
