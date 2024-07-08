import React, { useEffect, useState } from "react";
import SortUp from "../../assets/icons/SortUp";
import SortDown from "../../assets/icons/SortDown";
import { useSearchParams } from "react-router-dom";
const TableHeader = ({
  title,
  sortable,
  className,
  sortFunctionINC,
  sortFunctionDEC,
}) => {
  const [sortDEC, setSortDEC] = useState(false);
  const [page] = useSearchParams();
  const [limit] = useSearchParams();
  useEffect(() => {
    setSortDEC(false);
  }, [page.get("page"), limit.get("limit")]);
  return (
    <th className={className}>
      <button
        className="flex gap-2 justify-center items-center"
        onClick={() => {
          sortDEC ? sortFunctionDEC(title) : sortFunctionINC(title);
          setSortDEC(!sortDEC);
        }}
      >
        <p className="text-white">{title}</p>
        {sortable && (sortDEC ? <SortDown /> : <SortUp />)}
      </button>
    </th>
  );
};

export default TableHeader;
