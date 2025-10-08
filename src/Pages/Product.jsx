import React from 'react'
import { NavLink } from 'react-router-dom'

function Product(curElem) {
    const { _id, image, brand, price } = curElem
    return (
        <div>
            <NavLink to={`/singleproduct/${_id}`}>



                <div className="max-w-60 bg-white    m-auto border-gray-200 rounded-lg shadow-sm dark:bg-amber-100-800 dark:border-gray-700">
                    <div className='w-50 m-auto '>
                        <img className="rounded-t-lg p-2" src={image} alt="" />
                    </div>
                    <div className="p-5 flex justify-between">

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{brand}</p>
                        <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-black">$  {price}</h5>

                    </div>
                </div>

            </NavLink>
        </div>
    )
}

export default Product