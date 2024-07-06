import React from "react";
import SortUp from "../../assets/icons/SortUp";
import SortDown from "../../assets/icons/SortDown";

const TableHeader = ({ title, sortable, className }) => {
  return (
    <th className={className}>
      <button className="flex gap-2 justify-center items-center">
        <p className="text-white">{title}</p>
        {sortable && <SortUp />}
      </button>
    </th>
  );
};

export default TableHeader;
