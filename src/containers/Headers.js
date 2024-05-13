import React from "react";
import { Search } from "../components/Search";
import logo from "./../assets/logo.svg";
import { Headerleft } from "../components/Headerleft";

const Headers = () => {
  return (
    <>
      <div className="w-screen bg-blue-900 text-neutral-50 h-[3rem] flex fle-row items-center ">
        <div className="ml-[7rem]">
          <img src={logo} alt="" className=" w-28 bg-white p-1" />
        </div>
        <div className="ml-[11rem]">
          {" "}
          <Search className="items-center" />
        </div>
        <div className="ml-[23rem]">
          <Headerleft image={""}/>
        </div>
      </div>
    </>
  );
};

export default Headers;
