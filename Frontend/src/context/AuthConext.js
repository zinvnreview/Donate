import React, {createContext, useContext, useState} from "react";


const AuthContext = createContext();

export const AuthManager = ({Children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, userData, setUserData}}>
            {Children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
    