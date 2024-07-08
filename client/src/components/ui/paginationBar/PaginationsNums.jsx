import React from "react";

const PaginationsNums = ({ lastPage, setPage, pages }) => {
  return (
    <ul className="flex justify-center items-center text-2xl text-white gap-5 ">
      {pages.get("page") !== "1" && lastPage >= 4 && (
        <li
          className="hover:opacity-80 transition cursor-pointer"
          onClick={() => {
            const newPage =
              parseInt(pages.get("page")) >= lastPage - 2
                ? lastPage - 3
                : parseInt(pages.get("page") - 1);
            setPage(newPage);
          }}
        >
          {parseInt(pages.get("page")) >= lastPage - 2
            ? lastPage - 3
            : parseInt(pages.get("page")) - 1}
        </li>
      )}
      {lastPage>=3&&<li
        className={
          parseInt(pages.get("page")) <= lastPage - 2
            ? "underline pointer-events-none"
            : "hover:opacity-80 transition cursor-pointer"
        }
        onClick={() => {
          const newPage =
            parseInt(pages.get("page")) >= lastPage - 2
              ? lastPage - 2
              : parseInt(pages.get("page"));
          setPage(newPage);
        }}
      >
        {parseInt(pages.get("page")) >= lastPage - 2
          ? lastPage - 2
          : parseInt(pages.get("page"))}
      </li>}
      {lastPage>=2&&<li
        className={
          parseInt(pages.get("page")) === lastPage - 1
            ? "underline pointer-events-none"
            : "hover:opacity-80 transition cursor-pointer"
        }
        onClick={() => {
          const newPage =
            parseInt(pages.get("page")) >= lastPage - 2
              ? lastPage - 1
              : parseInt(pages.get("page")) + 1;
          setPage(newPage);
        }}
      >
        {parseInt(pages.get("page")) >= lastPage - 2
          ? lastPage - 1
          : parseInt(pages.get("page")) + 1}
      </li>}
      {pages.get("page") === "1" && lastPage >= 4 && (
        <li
          className="hover:opacity-80 transition cursor-pointer"
          onClick={() => setPage(parseInt(pages.get("page")) + 2)}
        >
          {parseInt(pages.get("page")) + 2}
        </li>
      )}
      {lastPage - 2 > parseInt(pages.get("page")) && lastPage > 4 && (
        <li className="pointer-events-none">...</li>
      )}

      <li
        className={
          parseInt(pages.get("page")) === lastPage
            ? "underline pointer-events-none"
            : "hover:opacity-80 transition cursor-pointer"
        }
        onClick={() => setPage(lastPage)}
      >
        {lastPage}
      </li>
    </ul>
  );
};

export default PaginationsNums;
