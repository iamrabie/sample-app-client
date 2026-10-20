import { createContext , useState } from "react";

export const AuthContext = createContext({
   token:null,
   setToken:() => null,
   login:() => null,
   logout:() => null
});


export const AuthProvider = ({children}) => {

    const [token , setToken] = useState(() => localStorage.getItem("token"));
    console.log("token :::::" , token);

    const login = (newToken) => {
        localStorage.setItem("token" , newToken);
        setToken(newToken);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    }

    const value = { token , login , logout };

    return( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}