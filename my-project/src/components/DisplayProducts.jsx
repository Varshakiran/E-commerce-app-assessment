import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DisplayProducts({ productList }) {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  let recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = productList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(productList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const addToCart = (item) => {
  };

  const prevPage = () => {

  }
  const changeCurrentPage = () => {
    
  }
  const nextPage = () => {
    
  }
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 place-items-center mx-20">
        {productList.map((item) => (
          <div className="w-[200px" key={item.key}>
            <div>
              <LazyLoadImage
                src={item.image}
                className="h-[150px] w-[180px] object-cover rounded-md "
              />
            </div>
            <div className="font-semibold text-center w-[150px]">
              {item.title}
            </div>
            {/* <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={(item)=>addToCart(item)}>Add to Cart</button> */}
          </div>
        ))}
      </div>
      <div>
        {/* <nav>
          <ul>
            <li style={{display:'inline'}}>
              <a href="#" onClick={prevPage}>prev</a>
            </li>
            {numbers.map((n, i) => (
              <li className={currentPage ? 'active' : ''}>
                <a href="#" onClick={changeCurrentPage}>
                  {n}
                </a>
              </li>
            ))}
             <li>
              <a href="#" onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}

export default DisplayProducts;
