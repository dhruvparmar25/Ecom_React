import React from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function CartAmountToggle({ amount, setDecrease, setIncrease }) {
  return (
    <div>
      <div className="amount-toggle flex justify-start items-center ">
        <button className="qty-btn" onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style p-5 text-2xl text-blue-400">{amount}</div>
        <button className="qty-btn" onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CartAmountToggle;
