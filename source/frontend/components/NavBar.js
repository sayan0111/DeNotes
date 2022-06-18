import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <div className="relative z-50">
        <header className="text-gray-600 body-font bg-gray-50 dark:bg-gray-900 dark:text-white">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-gray-100">
                {/* <img className="w-32 m-auto" src="/Logo.png" alt="logo" /> */}
                <div className="text-3xl p-3">DeNotes</div>
              </a>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {/* <Link href="/">
                <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 dark:decoration-blue-300">
                  Home
                </a>
              </Link> */}
              {/* <div className="">
                <SearchBar />
              </div> */}
              <Link href="/allcontributors">
                <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 dark:decoration-blue-300">
                  Search 
                </a>
              </Link>
              {/* <Link href="/whattodo">
                <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 dark:decoration-blue-300">
                  What to do?
                </a>
              </Link> */}
              <div className="absolute top-0 right-0 p-5 mx-auto">
                <button className="font-bold inline-flex items-center bg-gray-100 border-0 p-3 focus:outline-none hover:bg-gray-200 hover:shadow-teal-400 hover:text-slate-900 rounded-xl mt-4 md:mt-0 text-lg transition-all dark:bg-gray-600">
                  Connect
                </button>
              </div>
            
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
