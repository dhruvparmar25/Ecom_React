import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filter_reducer"

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
   
    
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state }}>
            {children}
        </FilterContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFiltercontext = () => {
    return useContext(FilterContext);
}

