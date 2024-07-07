import React from "react";

const TableRoll = ({ game }) => {
  return (
    <tr className="flex py-2 pl-6 hover:bg-white/10 transition">
      <td className="w-1/5 ">
        <img src={game.Img} alt="" className="h-[120px]" />
      </td>
      <td className="text-white w-1/5 flex items-center text-xl">{game.Name}</td>
      <td className="text-white w-1/5 flex items-center text-xl">{game.Category}</td>
      <td className="text-white w-1/5 flex items-center text-xl">{game.Price}$</td>
      <td className="text-white w-1/5 flex items-center text-xl">{game.Quantity}</td>
    </tr>
  );
};

export default TableRoll;
