import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filter_reducer";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value:"lowest"
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  const sorting = (event)=>{
  dispatch({ type: "GET_SORT_VALUE", payload: event.target.value });
  }

 useEffect(() => {
  dispatch({ type: "SORTING_PRODUCTS", payload: state.all_products });
}, [state.sorting_value, state.all_products]);


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting,setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFiltercontext = () => {
  return useContext(FilterContext);
};
