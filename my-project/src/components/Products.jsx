import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayProducts from "./DisplayProducts";

function Products() {
  const [productList, setProductList] = useState([]);

  // call api to fetch products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProductList(response.data));
  }, []);
  return (
    <div>
      {/* <h2 className="font-bold text-center">Products</h2> */}
      <DisplayProducts productList={productList}/>
    </div>
  );
}

export default Products;
