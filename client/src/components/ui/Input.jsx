import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
const Input = () => {
  return (
    <div className="flex gap-5 bg-blue-800 w-fit px-4 py-3 rounded-full justify-center items-center">
      <button>
        <SearchIcon />
      </button>
      <input type="text" className="bg-transparent outline-none text-white text-2xl" />
    </div>
  );
};

export default Input;
