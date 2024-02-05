import React from "react";

function DisplayProducts({ productList }) {
  console.log("productList", productList);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 place-items-center mx-20">
      {productList.map((item) => (
        <div className="w-[200px">
          <div>
            <img
              src={item.image}
              className="h-[150px] w-[180px] object-cover rounded-md "
            />
          </div>
          <div className="font-semibold text-center w-[150px]">
            {item.title}
          </div>
          <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default DisplayProducts;
