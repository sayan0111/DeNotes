import React from "react";
import Typing from "../../components/Typing";
import Study from "../../public/study.png";

const HomeMain = () => {
  return (
    <>
      <div className="bg-slate-800 flex">
        <Typing className="z-10" />
        <img
          className="w-96 h-80 m-auto absolute right-0 pr-20 mr-52"
          src="/study.png"
          alt="logo"
        />
      </div>

    </>
  );
};

export default HomeMain;
