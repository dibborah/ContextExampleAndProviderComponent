import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        // username:"dib",
        //  email:"dibborah@taazaa.com"
    })
    return (
        <div>
            {/* <AuthContext.Provider value={{ auth:auth, setAuth:setAuth }}> */}
            <AuthContext.Provider value={{ auth, setAuth}}>{/*If the key value pair is same in an object one can also write this way */}
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;