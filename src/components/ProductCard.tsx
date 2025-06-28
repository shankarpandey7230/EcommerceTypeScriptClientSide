import React from "react";
import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="productCard">
      <img
        src="https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg"
        alt={name}
      />
      <p>{name}</p>
      <span>{price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
