import React from 'react'
import { NavLink } from 'react-router-dom';

function  ListView({products}) {
  return (
    <div className='container grid'>
      {products.map((curElem)=>{
        console.log("🚀 ~ ListView ~ curElem:", curElem)
        
        const {_id,design,name,image,price}=curElem;
        return(
          <div className="card grid grid-cols-2">
            <figure>
              <img src={image} alt="" />
            </figure>
            <div className="card-data">
              <h3>{design}</h3>
              <p>${price}.00</p>
              <p>{name}</p>
              <NavLink to={`/singleproduct/${_id}`}>
              <button>Read More</button>
              </NavLink>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default ListView