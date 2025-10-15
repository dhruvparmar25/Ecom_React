import React from 'react'
import GridView from"../Pages/GridView"
import ListView from "../Pages/ListView"
import { useFiltercontext } from '../context/filter_context'

function ProductList() {

  const {filter_products, grid_view}=useFiltercontext();

  if ( grid_view ) {
    return <GridView products={filter_products}/>
  }

    if ( grid_view === false) {
    return <ListView products={filter_products}/>
  }

  return (
    <div>ProductList</div>
  )
}

export default ProductList