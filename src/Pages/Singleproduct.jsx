import React, { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import { useParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import Star from "../components/Star";
import AddToCart from "./AddToCart";

const API = import.meta.env.VITE_API_BASE_URL + "/product";

function Singleproduct() {
  const { getSingleProduct, isSignleLoading, singleProduct } =
    useProductContext();
  const { _id } = useParams();

  const {
    brand,
    design,
    discription,
    image,
    name,
    price,
    rating,
    type,
    offer,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${_id}`);
  }, []);

  if (isSignleLoading) {
    return <div className="page-loading text-center py-10 text-xl">Loading.....</div>;
  }

  // ✅ Safely handle missing or invalid values
  const numericPrice = Number(price) || 0;
  const offerValue = offer
    ? Number(offer.toString().replace("%", "").slice(0, 2)) || 0
    : 0;

  // ✅ Calculate MRP only if we have a valid price
  const mrp = numericPrice > 0 ? Math.round(numericPrice * (1 + offerValue / 100)) : 0;

  return (
    <div className="mt-6">
      <PageNavigation title={brand} />

      <div
        className="
          detailpage 
          w-[90%] 
          mx-auto 
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-8 
          bg-white 
          shadow-md 
          rounded-2xl 
          p-6
        "
      >
        {/* Product Image */}
        <div className="image-box flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="w-full max-w-md rounded-2xl object-cover shadow"
          />
        </div>

        {/* Product Details */}
        <div className="detail-box flex flex-col gap-4 justify-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-black text-white px-3 py-2 rounded w-fit">
            {name}
          </h2>

          <div className="text-[18px]">
            MRP ₹ <del>{mrp > 0 ? mrp : "—"}.00</del>
          </div>

          <div className="text-red-600 text-[18px] font-semibold">
            Deal Of The Day ₹ {price}.00
          </div>

          <p className="text-[16px] text-gray-700 leading-relaxed">
            {discription}
          </p>

          <div className="rating flex items-center gap-2">
            <Star star={rating} />
          </div>

          <div className="text-[16px]">
            <strong>Brand:</strong> {brand}
          </div>
          <div className="text-[16px]">
            <strong>Design:</strong> {design}
          </div>
          <div className="text-[16px]">
            <strong>Type:</strong> {type}
          </div>

          <div className="discount bg-zinc-700 text-white w-fit px-3 py-1 rounded">
            Discount: {offer}
          </div>

          <hr className="my-3 border-gray-300" />

          <AddToCart product={singleProduct} />
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
