import React, { useEffect, useState } from "react";
import TableRoll from "./TableRoll";
import TableHeader from "./TableHeader";
import { useSearchParams } from "react-router-dom";
import { getPageContent } from "../../services/getPageContent";
import "../../assets/style/style.css";

const Table = () => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page] = useSearchParams();
  const [limit] = useSearchParams();
  const [searchWord] = useSearchParams();
  useEffect(() => {
    const setContent = async () => {
      try {
        setGames(
          await getPageContent(
            page.get("page"),
            limit.get("limit"),
            searchWord.get("searchWord")
          )
        );
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    setContent();
  }, [page.get("page"), limit.get("limit"),searchWord.get('searchWord')]);

  const sortFunctionINC = (sortBy) => {
    const sortedGames = [...games].sort((a, b) =>
      typeof a[sortBy] === "string"
        ? a[sortBy].localeCompare(b[sortBy])
        : a[sortBy] - b[sortBy]
    );

    setGames(sortedGames);
  };
  const sortFunctionDEC = (sortBy) => {
    const sortedGames = [...games].sort((b, a) =>
      typeof a[sortBy] === "string"
        ? a[sortBy].localeCompare(b[sortBy])
        : a[sortBy] - b[sortBy]
    );

    setGames(sortedGames);
  };
  return (
    <table className="flex flex-col max-h-[600px] h-full max-w-7xl w-full bg-blue-800 rounded-xl p-2">
      <thead className="w-full">
        <tr className="flex py-3 pl-6 pr-2">
          <TableHeader className="w-1/5 px-2" title="Images" sortable={false} />
          <TableHeader
            className="w-1/5 px-2"
            title="Name"
            sortable={true}
            sortFunctionINC={sortFunctionINC}
            sortFunctionDEC={sortFunctionDEC}
          />
          <TableHeader
            className="w-1/5 px-2"
            title="Category"
            sortable={true}
            sortFunctionINC={sortFunctionINC}
            sortFunctionDEC={sortFunctionDEC}
          />
          <TableHeader
            className="w-1/5 px-2"
            title="Price"
            sortable={true}
            sortFunctionINC={sortFunctionINC}
            sortFunctionDEC={sortFunctionDEC}
          />
          <TableHeader
            className="w-1/5 px-2"
            title="Quantity"
            sortable={true}
            sortFunctionINC={sortFunctionINC}
            sortFunctionDEC={sortFunctionDEC}
          />
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
