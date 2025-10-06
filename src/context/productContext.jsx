import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();
const API = "http://localhost:3000/api/product";
const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data.data;
    console.log("🚀 ~ getProducts ~ products:", products);
  };
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ myname: "DHruv PArmar" }}>
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
