import React from "react";
import Typing from "../components/Typing";
import Study from "../public/study.png";
import Card from "../components/Card";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Hamburger from "../components/Hamburger";
import Categories from "./categories";

const HomeMain = () => {
  return (
    <>
      <div className="h-auto bg-slate-800 flex">
        <div className="flex">
          <Hamburger />
          <Typing className="z-10" />
          <img
            className=" object-fill w-96 h-80 mt-8 absolute right-0 pr-20 mr-52"
            src="/books.png"
            alt="logo"
          />
        </div>
      </div>
      <p className="text-3xl  font-semibold text-white bg-slate-800 pt-6 pb-5 px-8">
        Recently Added
      </p>
      <div className="grid grid-flow-col bg-slate-800">
        <Card />
      </div>
    </>
  );
};

export default HomeMain;
