import React, { useEffect, useState } from "react";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import ArrowRight from "../../assets/icons/ArrowRight";
import { useSearchParams } from "react-router-dom";
const LimitItems = () => {
  const [active, setActive] = useState(false);
  const [limit,setLimit] = useSearchParams({
    page:'1',
    limit:'4'
  })
  const setLimitFunc = (newLimit)=>{
    setLimit(
      (prev) => {
        prev.set("limit", newLimit); 
        prev.set("page", 1); 
        return prev;
      },
      { replace: true }
    );
  }
  const activeLimit = (num)=>{
    return limit.get("limit")===num?'underline':null
  }
  return (
    <div
      className={`flex items-center justify-center bg-blue-800 rounded-full cursor-pointer px-3 py-2 gap-2  ${
        active ? "pr-8" : "gap-0"
      } `}
    >
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? <ArrowRight /> : <ArrowLeft />}
      </button>
      <div
        className={`flex items-center justify-center text-white  text-2xl transition-width`}
        style={{
          width: active ? "400px" : "0px", 
          overflow: "hidden",
        }}
      >
        <button onClick={()=>{setLimitFunc(3)}} className={activeLimit("3")+" px-3"}>3</button>
        <button onClick={()=>{setLimitFunc(4)}} className={activeLimit("4")+" px-3"}>4</button>
        <button onClick={()=>{setLimitFunc(5)}} className={activeLimit("5")+" px-3"}>5</button>
        <button onClick={()=>{setLimitFunc(6)}} className={activeLimit("6")+" px-3"}>6</button>
        <button onClick={()=>{setLimitFunc(7)}} className={activeLimit("7")+" px-3"}>7</button>
        <button onClick={()=>{setLimitFunc(8)}} className={activeLimit("8")+" px-3"}>8</button>
        <button onClick={()=>{setLimitFunc(10)}} className={activeLimit("10")+" px-3"}>10</button>
        <button onClick={()=>{setLimitFunc(12)}} className={activeLimit("12")+" px-3"}>12</button>
        <button onClick={()=>{setLimitFunc(15)}} className={activeLimit("15")+" px-3"}>15</button>
        <button onClick={()=>{setLimitFunc(30)}} className={activeLimit("30")+" px-3"}>30</button>
      </div>
    </div>
  );
};

export default LimitItems;
