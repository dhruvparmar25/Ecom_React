import React from "react";
import { NavLink } from "react-router-dom";

function ListView({ products }) {
  return (
    <div className="container grid">
      {products.map((curElem) => {
        const { _id, design, name, image, price } = curElem;
        return (
          <>
            <div className="card grid grid-cols-1 sm:grid-cols-2 items-center p-4">
              <figure className="flex justify-center items-center">
                <img
                  src={image}
                  alt={name}
                  className="w-full max-w-[300px] h-auto object-contain"
                />
              </figure>

              <div className="card-data flex flex-col gap-3">
                <h3 className="text-2xl">{design}</h3>
                <p className="text-2xl">${price}.00</p>
                <p className="text-3xl">{name}</p>
                <NavLink to={`/singleproduct/${_id}`}>
                  <button>Read More</button>
                </NavLink>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default ListView;
