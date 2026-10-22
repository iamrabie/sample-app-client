import { createContext, useState , useEffect } from "react";

export const SelectedUserContext = createContext({
  selectedUser:{
     id: null,
     name: null,
  },
  setSelectedUser: () => null,
});

export const SelectedUserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState({
    id: localStorage.getItem("selectedUserId"),
    name: localStorage.getItem("selectedUserName")
  });


//   console.log("SELECTED USER CONTEXT :::::" , selectedUser);

  useEffect(() => {
    if (selectedUser?.id) {
       localStorage.setItem("selectedUserId" , selectedUser?.id);
       localStorage.setItem("selectedUserName" , selectedUser?.name);
    }

    else {
        localStorage.removeItem("selectedUserId");
        localStorage.removeItem("selectedUserName");
    }
  } , [selectedUser]);



  const value = { selectedUser, setSelectedUser };
  return (
    <SelectedUserContext.Provider value={value}>
      {children}
    </SelectedUserContext.Provider>
  );
};
