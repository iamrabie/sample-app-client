import { createContext , useState } from "react";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:() => null,
    setUserOnLogin:() => null,
    setUserOnLogout:() => null
});


export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(() => {
    const id = localStorage.getItem("userId");

    if (!id) return null;

    return {
        id: id,
        email: localStorage.getItem("userEmail"),
        name: localStorage.getItem("userName")
    };
});

    console.log("CURRENT USER :::" , currentUser);

    const setUserOnLogin = (data) => {

        localStorage.setItem("userId" , data?.id );
        localStorage.setItem("userEmail" , data?.email);
        localStorage.setItem("userName" , data?.name);

        setCurrentUser({
            id:data?.id,
            email:data?.email,
            name:data?.name
        });
    }

    const setUserOnLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("userEmail");
        console.log("is undefiend ?" , localStorage.removeItem("userName"));

        setCurrentUser(null);
    }

    const value = { currentUser ,  setUserOnLogin , setUserOnLogout };
    
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}