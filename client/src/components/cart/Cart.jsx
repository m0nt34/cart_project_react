import React from "react";
import Table from "../table/Table";
import Input from "../ui/Input";
import PaginationBar from "../ui/paginationBar/PaginationBar";
import LimitItems from "../ui/LimitItems";
const Cart = () => {
  return (
    <div className="flex flex-col justify-center px-14 items-center max-w-7xl w-full h-screen">
      <div className="flex items-center justify-between w-full mb-5">
        <Input />
        <div>
          <LimitItems />
        </div>
      </div>
      <Table />
      <div className="flex justify-center items-center w-full mt-5">
        <PaginationBar />
      </div>
    </div>
  );
};

export default Cart;
