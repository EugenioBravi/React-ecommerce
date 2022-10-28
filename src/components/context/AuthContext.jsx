import { createContext, useContext } from "react";

const AuthContext = createContext();
export const useAuthContext = useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {

    const user = {

    }


  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
