import { createContext, useContext } from "react"

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return (<AppContext.Provider value={{ myname: "DHruv PArmar" }}>
        {children}
    </AppContext.Provider>)
};
// Custom Hooks
const useProductContext = () => {
    return useContext(AppContext);

}
// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, AppContext, useProductContext } 