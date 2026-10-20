import { createContext , useState } from "react";

export const AuthContext = createContext({
   token:null,
   setToken:() => null
});


export const AuthProvider = ({children}) => {

    const [token , setToken] = useState(null);
    console.log("token :::::" , token);

    const value = { token , setToken };

    return( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}