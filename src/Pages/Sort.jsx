import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { useFiltercontext } from "../context/filter_context";

function Sort() {
  const {sorting,filter_products,grid_view,setGridView,setListView}=useFiltercontext()
  console.log("🚀 ~ Sort ~ sorting:", sorting)
  return (
    <div>
      <div className="sort-section flex justify-between mt-5">
        {/* 1st col */}
        <div className="sorting-list--grid flex gap-2">
          <button onClick={setGridView} className={grid_view?"active sort-btn":"sort-btn"}>
            <BsFillGridFill />
          </button>
          <button onClick={setListView} className={!grid_view?"active sort-btn":"sort-btn"}>
            <BsList />
          </button>
        </div>
        <div className="product-data">
          <p>{`${filter_products.length} Product Available`}</p>
        </div>
        <div className="sort-selection">
          <form action="#" className="border-1 ">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting} >
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(highest)</option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>

            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sort;
