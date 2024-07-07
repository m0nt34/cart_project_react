import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
const PageNumbers = ({ lastPage, setPage, pages }) => {
  return (
    <ul className="flex justify-center items-center text-2xl text-white gap-5 cursor-pointer">
      {pages.get("page") !== "1" && (
        <li
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
      <li
        className={
          parseInt(pages.get("page")) <= lastPage - 2 ? "underline" : null
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
      </li>
      <li
        className={
          parseInt(pages.get("page")) === lastPage - 1 ? "underline" : null
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
      </li>
      {pages.get("page") === "1" && (
        <li onClick={() => setPage(parseInt(pages.get("page")) + 2)}>
          {parseInt(pages.get("page")) + 2}
        </li>
      )}
      {lastPage - 2 > parseInt(pages.get("page")) && <li>...</li>}

      <li
        className={
          parseInt(pages.get("page")) === lastPage ? "underline" : null
        }
        onClick={() => setPage(lastPage)}
      >
        {lastPage}
      </li>
    </ul>
  );
};

export default PageNumbers;
