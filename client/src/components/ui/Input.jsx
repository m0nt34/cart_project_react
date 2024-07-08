import React, { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import { useSearchParams } from "react-router-dom";
const Input = () => {
  const [searchWord, setSearchWord] = useSearchParams({
    searchWord: "",
  });
  const search = searchWord.get("searchWord");

  return (
    <div className="flex gap-5 bg-blue-800 w-fit px-4 py-3 rounded-full justify-center items-center">
      <button>
        <SearchIcon />
      </button>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearchWord((prev) => {
            prev.set("searchWord", e.target.value);
            return prev;
          });
        }}
        className="bg-transparent outline-none text-white text-2xl"
      />
    </div>
  );
};

export default Input;
