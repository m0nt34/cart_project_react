import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import ArrowRight from "../../../assets/icons/ArrowRight";
import { getLastPage } from "../../../services/getLastPages";
import PaginationsNums from "./PaginationsNums";
const PaginationBar = () => {
  const [pages, setPages] = useSearchParams({
    page: "1",
    limit: "4",
    lastPage: "",
    searchWord: "",
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
  useEffect(() => {
    const fetchLastPage = async () => {
      console.log(pages.get("searchWord"));
      try {
        const data = await getLastPage(
          parseInt(pages.get("limit"), pages.get("searchWord"))
        );
        setPages(
          (prev) => {
            prev.set("lastPage", data);
            return prev;
          },
          { replace: true }
        );
      } catch (error) {
        console.error("Error fetching last page:", error);
      }
    };
    fetchLastPage();
    setPage(1);
  }, [pages.get("limit"),pages.get("searchWord")]);
  useEffect(() => {
    setPages(
      (prev) => {
        prev.set("page", 1);
        prev.set("limit", 4);
        prev.set("searchWord", "");
        return prev;
      },
      { replace: true }
    );
  }, []);
  return (
    <div className="flex bg-blue-800 px-5 py-2 rounded-full gap-3">
      <button
        className={
          pages.get("page") === "1"
            ? "opacity-50 pointer-events-none transition"
            : "opacity-100 transition hover:opacity-80"
        }
        onClick={() => {
          setPage(parseInt(pages.get("page")) - 1);
        }}
      >
        <ArrowLeft />
      </button>
      <PaginationsNums
        lastPage={parseInt(pages.get("lastPage"))}
        setPage={setPage}
        pages={pages}
      />
      <button
        className={
          pages.get("page") === pages.get("lastPage")
            ? "opacity-50 pointer-events-none transition"
            : "opacity-100 transition hover:opacity-80"
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
