import React from "react";

const TableRoll = ({ game }) => {
  return (
    <tr className="flex py-2 pl-6 hover:bg-white/10 transition px-4">
      <td className="w-1/5 flex-wrap">
        <img src={game.Img} alt="" className="h-[120px]" />
      </td>
      <td className="text-white w-1/5 flex items-center text-xl px-4 flex-wrap">{game.Name}</td>
      <td className="text-white w-1/5 flex items-center text-xl px-4 flex-wrap">{game.Category}</td>
      <td className="text-white w-1/5 flex items-center text-xl px-4 flex-wrap">{game.Price}$</td>
      <td className="text-white w-1/5 flex items-center text-xl px-4 flex-wrap">{game.Quantity}</td>
    </tr>
  );
};

export default TableRoll;
