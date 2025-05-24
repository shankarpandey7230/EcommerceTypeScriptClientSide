import React, { ReactElement, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: string;
  name: string;
  price: number;
  stock: number;
  id: string;
}

const img1 =
  "https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:*";
const arr: DataType[] = [
  {
    photo: img1,
    name: "Sample Product",
    price: 99.99,
    stock: 50,
    id: "sajknaskd",
  },
];
const columns: ColumnDef<DataType>[] = [
  {
    header: "Photo",
    accessorKey: "photo",
    cell: (info) => <img src={info.getValue() as string} alt="Product" />,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Stock",
    accessorKey: "stock",
  },
  {
    header: "Action",
    accessorKey: "id",
    cell: (info) => (
      <Link to={`/admin/product/${info.getValue()}`}>Manage</Link>
    ),
  },
];
const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Products",
    true
  )();
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table}</main>
      <Link to="/admin/product/new" className="create-product-button">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
