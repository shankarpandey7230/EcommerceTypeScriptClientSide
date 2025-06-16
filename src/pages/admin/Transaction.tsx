import React, { ReactElement, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { ColumnDef } from "@tanstack/react-table";
import TableHOC from "../../components/admin/TableHOC";

import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  id: string;
}

const arr: DataType[] = [
  {
    user: "Shankar",
    amount: 120,
    discount: 10,
    quantity: 2,
    status: <span style={{ color: "green" }}>Delivered</span>,
    id: "sajknaskd",
  },
];

const columns: ColumnDef<DataType>[] = [
  {
    header: "User",
    accessorKey: "user",
    cell: (info) => info.getValue(),
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Discount",
    accessorKey: "discount",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => info.getValue(),
  },
  {
    header: "Action",
    accessorKey: "id",
    cell: (info) => (
      <Link to={`/admin/transaction/${info.getValue()}`}>Manage</Link>
    ),
  },
];

const Customer = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Transactions",
    true
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table}</main>
    </div>
  );
};

export default Customer;
