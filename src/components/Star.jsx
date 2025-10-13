import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ star }) {
  console.log("star" + star);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;   
        
    return (
      <div>
        <span key={index}>
          {star >= index + 1 ? (
            <FaStar className="star-icon text-[2rem] text-orange-400 " />
          ) : star >= number ? (
            <FaStarHalfAlt  className="star-icon text-[2rem] text-orange-400" />
          ) : (
            <AiOutlineStar className="star-icon text-[2.4rem] text-orange-400 " />
          )}
        </span>
      </div>
    );
  });

  return <>
  
  <div className="icon-style flex gap-3 items-center justify-start">
    {ratingStar}
  </div>

  </>;
}

export default Star;
