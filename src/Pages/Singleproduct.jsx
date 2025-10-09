import React, { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import { useParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";

const API = import.meta.env.VITE_API_BASE_URL + "/product";

function Singleproduct() {
  const { getSingleProduct, isSignleLoading, singleProduct } =
    useProductContext();
  const { _id } = useParams();

  const {
    brand,
    design,
    discount,
    discription,
    image,
    name,
    price,
    rating,
    type,
    size,
    offer,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${_id}`);
  }, []);

  if (isSignleLoading) {
    return <div className="page-loading">Loading.....</div>;
  }

  // ✅ Safely handle missing or invalid values
  const numericPrice = Number(price) || 0;
  const offerValue = offer
    ? Number(offer.toString().replace("%", "").slice(0, 2)) || 0
    : 0;

  // ✅ Calculate MRP only if we have a valid price
  const mrp = numericPrice > 0 ? Math.round(numericPrice * (1 + offerValue / 100)) : 0;

  console.log("price:", numericPrice, "offer:", offerValue, "mrp:", mrp);

  return (
    <div className="mt-4">
      <PageNavigation title={brand} />
      <div className="detailpage w-[80%] m-auto flex">
        <div className="image-box w-[40%] p-10">
          <img src={image} alt={name} />
        </div>
        <div className="detail box w-[40%] p-14 flex flex-col gap-4">
          <div className="title text-3xl bg-black text-white p-2 rounded w-fit">{name}</div>

          <div className="mrp text-[18px] text-red-400">
            MRP ₹ <del>{mrp > 0 ? mrp : "—"}</del>
          </div>

          <div className="dealOfTheDay text-purple-600 text-[18px]">
            Deal Of The Day ₹ {price}
          </div>

          <div className="discription text-[24px] w-100">{discription}</div>
          <div className="size">{size}</div>
            <div className="rating text-[18px]">{rating}</div>

          <div className="brand "><strong>Brand :</strong> {brand}</div>
          <div className="design ">
            <strong>Design : </strong> {design}
          </div>
          <div className="type">
            <strong> Type : </strong> {type}
          </div>
          <div className="discount bg-zinc-500 text-white w-fit p-1 rounded">Discount : {offer}</div>
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
