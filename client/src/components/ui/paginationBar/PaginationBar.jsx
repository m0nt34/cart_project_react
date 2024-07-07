import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import ArrowRight from "../../../assets/icons/ArrowRight";
import { getLastPage } from "../../../services/getLastPages";
import PageNumbers from "./PageNumbers";
const PaginationBar = () => {
  const [pages, setPages] = useSearchParams({
    page: "1",
    limit: "4",
  });
  const setPage = (newPage) => {
    setPages(
      (prev) => {
        prev.set("page", newPage);
        return prev;
      },
      { replace: true }
    );
  };
  const [lastPage, setLastPage] = useState(null);
  useEffect(() => {
    const fetchLastPage = async () => {
      try {
        const data = await getLastPage({ limit: parseInt(pages.get("limit")) });
        setLastPage(data);
      } catch (error) {
        console.error("Error fetching last page:", error);
      }
    };

    fetchLastPage();
  }, []);

  return (
    <div className="flex bg-blue-800 px-5 py-2 rounded-full gap-3">
      <button
        className={
          pages.get("page") === "1"
            ? "opacity-50 pointer-events-none transition"
            : "opacity-100 transition"
        }
        onClick={() => {
          setPage(parseInt(pages.get("page")) - 1);
        }}
      >
        <ArrowLeft />
      </button>
      <PageNumbers lastPage={lastPage} setPage={setPage} pages={pages} />
      <button
        className={
          parseInt(pages.get("page")) === lastPage
            ? "opacity-50 pointer-events-none transition"
            : "opacity-100 transition"
        }
        onClick={() => {
          setPage(parseInt(pages.get("page")) + 1);
        }}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default PaginationBar;
