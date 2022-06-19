import React from "react";
import { Input } from "web3uikit";
const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center px-9 mr-5">
      <Input 
      label="Search Notes"
      name="Search Notes"
      prefixIcon="search"
      labelBgColor="#141d26"
      ></Input>

        
      </div>
    </>
  );
};

export default SearchBar;
