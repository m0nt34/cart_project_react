import React, { useEffect, useState } from "react";
import TableRoll from "./TableRoll";
import TableHeader from "./TableHeader";
import { useSearchParams } from "react-router-dom";
import "../../assets/style/style.css";
import axios from "axios";
const Table = () => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page] = useSearchParams();
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/get/games?pageNum=${page.get(
          "page"
        )}&limitItems=4`
      )
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [page.get("page")]);
  return (
    <table className="flex flex-col max-h-[600px] h-full max-w-7xl w-full bg-blue-800 rounded-xl p-2">
      <thead className="w-full">
        <tr className="flex py-3 pl-6 pr-2">
          <TableHeader className="w-1/5" title="Images" sortable={false} />
          <TableHeader className="w-1/5" title="Name" sortable={true} />
          <TableHeader className="w-1/5" title="Category" sortable={true} />
          <TableHeader className="w-1/5" title="Price" sortable={true} />
          <TableHeader className="w-1/5" title="Quantity" sortable={true} />
        </tr>
      </thead>
      <tbody className="custom-scrollbar overflow-auto h-full">
        {loading || games === null ? (
          <tr className="flex items-center justify-center h-full">
            <td className="flex items-center justify-center">
              <h1 className="loading_text">Loading...</h1>
              <div className="slider">
                <div className="line"></div>
                <div className="break dot1"></div>
                <div className="break dot2"></div>
                <div className="break dot3"></div>
              </div>
            </td>
          </tr>
        ) : (
          games.map((game, index) => <TableRoll key={index} game={game} />)
        )}
      </tbody>
    </table>
  );
};

export default Table;
