import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

function AddToCart({ product }) {
    const { id } = product
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        setAmount((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const setIncrease = () => {
        setAmount((prev) => prev + 1);
    };
    return (
        <div>
            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            <NavLink to="/cart">
                <button>Add To Cart</button>
            </NavLink>
        </div>
    );
}

export default AddToCart;
