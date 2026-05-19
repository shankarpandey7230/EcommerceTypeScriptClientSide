import React, { ReactElement, useState } from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import TableHOC from "../components/admin/TableHOC";

interface DataType {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
}

const arr: DataType[] = [
  {
    _id: "asdfafd",
    amount: 2,
    quantity: 9,
    discount: 9,
    status: <span className="red">Processing</span>,
  },
];
const columns: ColumnDef<DataType>[] = [
  {
    header: "Id",
    accessorKey: "_id",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    enableSorting: true,
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },

  {
    header: "Discount",
    accessorKey: "discount",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => info.getValue() as ReactElement,
  },

  {
    header: "Action",
    accessorKey: "id",
    cell: () => <Link to={`/order/asdfafd`}>View</Link>,
  },
];
const Orders = () => {
  const [data] = useState<DataType[]>(arr);
  const showPagination = data.length > 6;
  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Orders",
    showPagination
  )();
  return (
    <div className="admin-container">
      <main>{Table}</main>
    </div>
  );
};

export default Orders;
