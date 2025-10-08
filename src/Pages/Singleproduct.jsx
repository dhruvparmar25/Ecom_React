import React, { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import { useParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";

const API = import.meta.env.VITE_API_BASE_URL + "/product";

function Singleproduct() {
  const { getSingleProduct, isSignleLoading, singleProduct } =
    useProductContext();
  console.log("🚀 ~ Singleproduct ~ singleProduct:", singleProduct);

  const { _id } = useParams();

  const {
    brand,
    design,
    discount,
    discription,
    image,
    name,
    offer,
    price,
    rating,
    type,
    size,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${_id}`);
  }, []);

  if (isSignleLoading) {
    return <div className="page-loading">Loading.....</div>
  }

  return (
    <div className="mt-4">
      <PageNavigation title={brand} />
      <div className="detailpage w-[80%] m-auto flex">
            <div className="image-box w-[40%] p-10">
              <img src={image} alt={name}/>
               </div>
            <div className="detail box w-[40%] p-10">
              <div className="title">{name}</div>
              <div className="rating">{rating}</div>
              <div className="mrp">MRP ₹{price}</div>
              <div className="discription">{discription}</div>
              <div className="size">{size}</div>
              <div className="brand">Brand : {brand}</div>
              <div className="design">Design : {design}</div>
              <div className="type">Type : {type}</div>
              <div className="offer">Offer : {offer}</div>
              <div className="discount">Discount : {discount}</div>


            </div>
      </div>
    </div>
  );
}

export default Singleproduct;
