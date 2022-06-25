import React from "react";
import { Button } from "@mui/material";
const Details = () => {
  return (
    <>
      <div className="bg-slate-800 flex text-slate-50 py-16 px-44">
        <div className="my-10 mx-24">
          <img
            src="https://image.slidesharecdn.com/dynamicprogramming-160512234533/85/dynamic-programming-2-320.jpg?cb=1463096779"
            alt="Girl in a jacket"
            className="h-96 w-96"
          />
        </div>
        <div className="my-10">
          <p className="text-2xl font-bold">Dynamic programming</p>
          <p className="text-xl font-semibold my-4">Price: 0.0002 ETH</p>
          <p className="text-xl font-semibold my-4">Seller: </p>
          <p className="text-xl font-semibold my-4">
            Subject: Computer Science
          </p>
          <p className="text-xl font-semibold my-4">Semester: 4th </p>
          <p className="text-xl font-semibold mt-4 mb-16">College: HITK </p>
          
          <div className="bg-blue-500 rounded-full grid items-center py-2 px-3 hover:bg-blue-700 my-5">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl">
              BUY
            </button>
          </div>
        </div>
      </div>
      {/* demo */}
      
      <div className="bg-slate-800 text-2xl font-bold text-white ">
          <p className=" mx-24">Demo</p>
        <div className="grid grid-cols-3 grid-flow-row gap-4">
        <div className="my-10 mx-24">
          <img
            src="https://image.slidesharecdn.com/dynamicprogramming-160512234533/85/dynamic-programming-2-320.jpg?cb=1463096779"
            alt="Girl in a jacket"
            className="h-96 w-96"
          />
        </div>
        <div className="my-10 mx-24">
          <img
            src="https://image.slidesharecdn.com/dynamicprogramming-160512234533/85/dynamic-programming-2-320.jpg?cb=1463096779"
            alt="Girl in a jacket"
            className="h-96 w-96"
          />
        </div>
        <div className="my-10 mx-24">
          <img
            src="https://image.slidesharecdn.com/dynamicprogramming-160512234533/85/dynamic-programming-2-320.jpg?cb=1463096779"
            alt="Girl in a jacket"
            className="h-96 w-96"
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default Details;
