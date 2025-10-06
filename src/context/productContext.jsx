import axios from "axios";
import Reducer from '../reducer/productReduce'
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const API = "http://localhost:3000/api/product";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: []
}

const AppProvider = ({ children }) => {

    //use reducer
    const [state, dispatch] = useReducer(Reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const products = await res.data.data;
            console.log("🚀 ~ getProducts ~ products:", products);
            dispatch({ type: "SET_API-DATA", payload: products })
        } catch (error) {
            console.log(error);
            
            dispatch({ type: "API_ERROR" })
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
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
