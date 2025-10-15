import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filter_reducer"

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view:true,
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView=()=>{
        return dispatch({type:"SET_GRIDVIEW"})
    }

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);
 
    return (
        <FilterContext.Provider value={{ ...state,setGridView}}>
            {children}
        </FilterContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFiltercontext = () => {
    return useContext(FilterContext);
}

