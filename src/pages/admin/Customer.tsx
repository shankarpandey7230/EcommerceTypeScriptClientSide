import React, { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { ColumnDef } from "@tanstack/react-table";
import TableHOC from "../../components/admin/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: string;
  name: string;
  email: string;
  gender: string;
  role: string;
  id: string;
}

const img1 =
  "https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:*";
const arr: DataType[] = [
  {
    avatar: img1,
    name: "Sample Product",
    email: "asf@faagaed",
    gender: "male",
    role: "user",
    id: "sajknaskd",
  },
];

const Customer = () => {
  const [data, setData] = useState<DataType[]>(arr);
  const columns: ColumnDef<DataType>[] = [
    {
      header: "Avatar",
      accessorKey: "avatar",
      cell: (info) => <img src={info.getValue() as string} alt="Product" />,
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      enableSorting: true,
    },
    {
      header: "Email",
      accessorKey: "email",
      enableSorting: true,
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Action",
      accessorKey: "id",
      cell: ({ getValue }) => {
        const id = getValue() as string;

        const handleDelete = () => {
          // TODO: Replace with your delete logic
          // console.log("Delete user with id:", id);
          const confirmed = window.confirm("Are you sure you want to delete?");
          if (!confirmed) return;

          setData((prev) => prev.filter((user) => user.id !== id));
        };

        return (
          <button
            onClick={handleDelete}
            style={{ color: "red", cursor: "pointer" }}
          >
            <FaTrash />
          </button>
        );
      },
    },
  ];
  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Customers",
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
