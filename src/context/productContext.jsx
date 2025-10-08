import axios from "axios";
import Reducer from "../reducer/productReduce";
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const API = import.meta.env.VITE_API_BASE_URL + "/product";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSignleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  //use reducer
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data.data;
      console.log("🚀 ~ getProducts ~ products:", products);
      dispatch({ type: "SET_API-DATA", payload: products });
    } catch (error) {
      console.log(error);

      dispatch({ type: "API_ERROR" });
    }
  };

  //MY 2nd api call for single page
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const res = await axios.get(url);

      const productsArray = await res.data.data;
      const urlParams = new URLSearchParams(new URL(url).search);
      const targetId = urlParams.get("id"); // Get the ID from the URL

      const singleProduct = productsArray.find(
        (product) => product._id === targetId
      );

      if (singleProduct) {
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      } else {
        console.error("Product with ID not found in the array:", targetId);
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: {} }); // Empty object dispatch kar do
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, AppContext, useProductContext };
