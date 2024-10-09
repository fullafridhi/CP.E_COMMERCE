import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPeoducts } from "../redux/slices/ProductSlice";
import ProductList from "../components/ProductList";
import Panier from "../components/Panier";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(GetPeoducts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <ProductList products={products} />
      {console.log(error)}
      <Panier />
    </div>
  );
};

export default Home;
