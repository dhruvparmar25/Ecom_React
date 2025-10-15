import React from "react";
import FilterSection from "../Pages/FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";
import { useFiltercontext } from "../context/filter_context";

function Products() {
  const{filter_products}=useFiltercontext();
  console.log("🚀 ~ Products ~ filter_products:", filter_products)
  return (
    <>
      <div className="w-[80%] m-auto grid grid-cols-[0.2fr_1fr]">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
        <div className="sort-filter">
          <Sort/>
        
        </div>
        <div className="main-product">
          <ProductList/>
        </div>
        </section>
      </div>
    </>
  );
}

export default Products;
