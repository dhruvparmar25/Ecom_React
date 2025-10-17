import React from 'react'
import Product from "./Product"

function GridView({products}) {
  console.log("🚀 ~ GridView ~ products:", products)
  return (
    <>
    <div className="section">
    <div className="container grid md:grid-cols-4 gap-4">
      {products.map((curElem)=>{
        return <Product key={curElem._id} {...curElem}/>
      })  
      }
    </div>

    </div>
    </>
  )
}

export default GridView