import React, { useState ,useRef} from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import { useSearchParams } from "react-router-dom";
const Input = () => {
  const [searchWord, setSearchWord] = useSearchParams({
    searchWord: "",
  });
  const [state, setState] = useState("");
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    setState(e.target.value);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSearchWord((prev) => {
        prev.set("searchWord", e.target.value);
        return prev;
      });
    }, 300);
  };

  return (
    <div className="flex gap-5 bg-blue-800 w-fit px-4 py-3 rounded-full justify-center items-center">
      <button>
        <SearchIcon />
      </button>
      <input
        type="text"
        value={state}
        onChange={handleChange}
        className="bg-transparent outline-none text-white text-2xl"
      />
    </div>
  );
};

export default Input;
