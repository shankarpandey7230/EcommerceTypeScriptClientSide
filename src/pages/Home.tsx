import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="afas"
          name="matchbox"
          price={42141}
          stock={35}
          handler={addToCartHandler}
          photo="https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
