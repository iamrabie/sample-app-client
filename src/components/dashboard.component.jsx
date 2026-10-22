import { IoCallSharp } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

import { socket } from "../App";
import { useState , useContext , useEffect } from "react";

import { AuthContext } from "../context/auth.context";
import { UserContext } from "../context/user.context";
import { SelectedUserContext } from "../context/selectedUser.context";

import { useNavigate } from "react-router-dom";

import InputField from "./input.component";

const Dashboard = () => {

    const [input , setInput] = useState('');
    // console.log("input is ::" , input);

    const [users , setUsers ] = useState([]);
    const [conversations, setConversations] = useState([]);
    console.log("conversations:::" , conversations , "length" , conversations.length);

    useEffect(() => {
      fetch("http://localhost:5000/api/yap/users" , {
        method:"GET",
        headers : {
          "Content-Type":"application/json"
        }
      }).
      then(res => res.json()).
      then(data => setUsers(data?.data)).
      catch(err => { console.log(err.message); })

    } , [])

    const { logout } = useContext(AuthContext);
    const { currentUser , setUserOnLogout } = useContext(UserContext);
    // console.log("current user id::" , currentUser?.id);
    const { setSelectedUser } = useContext(SelectedUserContext);

    const navigate = useNavigate();

    // console.log("socket in the dashboard comp" , socket);

    const handleInput = (val) => {
      // console.log(val);
      setInput(val);
    }

    const handleSendMessage = () => {
      console.log("you clocked handle ssend message button");

      socket.emit("on-send-message" , input , currentUser?.id);
    }

    const handleSetSelectedUser = () => {
      console.log("ypu clicked the suer");
    }

    return(
        <div className="flex w-screen">
            <div className="w-[25%] bg-blue-200/30 h-screen">
              <div className="flex gap-x-2 border items-center justify-center mb-3">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s" alt="logo" height="50" width="50" className="rounded-full" />
                 <div className="flex flex-col">
                    <p className="text-lg font-semibold">Rabia Zahid</p>
                    <p className="text-sm">My Account</p>
                 </div>
              </div>
              {/* <hr className="bg-gray-200 h-1" /> */}
              <div className="w-[250px] mx-auto ">
                {users.map((user) => (
                    <div className="flex gap-x-3 py-4 !border-b border-gray-300 items-center" onClick={handleSetSelectedUser}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s" width="35" height="35" className="rounded-full" />
                        <div className="flex flex-col">
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-[12px]">{user.email}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>

            {/* MAIN CHAT WINDOW */}
            <div className="w-1/2 h-screen">
            {/* {conversations.length == 0 ? 
            ( */}
              {/* <div className="flex flex-col gap-y-1 border justify-center items-center h-full">
                <p className="text-xl font-semibold">Start a conversation</p>
                <div className="text-2xl">
                  ➕
                </div>
              </div> */}
            {/* ) 
            : */}
             <div className="flex flex-col">
                {/* header */}
               <div className="h-[12vh] flex items-center">
                  <div className="w-[80%] bg-gray-100 rounded-full h-[8vh] mx-auto px-10 py-1 flex justify-between items-center">
                     <div className="flex items-center gap-x-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s" height="30" width="30" />
                        <div className="flex flex-col text-[12px]">
                            <p className="m-0 font-semibold">Aqsa Nazeer</p>
                            <p className="m-0">online</p>
                        </div>
                     </div>
                     <div>
                        <IoCallSharp size={24} /> 
                     </div>
                  </div>
               </div>

                {/* body */}
               <div className="flex-1 px-3 py-1 flex flex-col gap-y-2 overflow-y-auto border-b">
                  <div className="bg-gray-100 rounded-b-xl rounded-tr-xl p-2 w-[fit-content] max-w-[370px]">
                    lorem ipsum 
                  </div>
                  <div className="bg-blue-400 text-white rounded-b-xl rounded-tl-xl p-2 w-[fit-content] max-w-[400px] ml-auto">
                   lorem ipsum .....   lorem ipsum 
                  </div>
                    <div className="bg-gray-100 rounded-b-xl rounded-tr-xl p-2 w-[fit-content] max-w-[370px]">
                    lorem ipsum .....   lorem ipsum .....  
                  </div>
                  <div className="bg-blue-400 text-white rounded-b-xl rounded-tl-xl p-2 w-[fit-content] max-w-[400px] ml-auto">
                   lorem ipsum .....   lorem ipsum .....  lorem ipsum .....
                  </div>  <div className="bg-gray-100 rounded-b-xl rounded-tr-xl p-2 w-[fit-content] max-w-[370px]">
                    lorem ipsum 
                  </div>
                  <div className="bg-blue-400 text-white rounded-b-xl rounded-tl-xl p-2 w-[fit-content] max-w-[400px] ml-auto">
                   lorem ipsum .....   lorem ipsum .....  lorem ipsum .....  lorem ipsum .....       lorem ipsum .....   lorem ipsum .....  lorem ipsum .....  lorem ipsum .....       lorem ipsum .....   lorem ipsum .....  lorem ipsum .....  lorem ipsum ..... 
                  </div>  <div className="bg-gray-100 rounded-b-xl rounded-tr-xl p-2 w-[fit-content] max-w-[370px]">
                    lorem ipsum .....   lorem ipsum .....  lorem ipsum .....  lorem ipsum .....
                  </div>
                  <div className="bg-blue-400 text-white rounded-b-xl rounded-tl-xl p-2 w-[fit-content] max-w-[400px] ml-auto">
                   lorem ipsum .....   lorem ipsum .....  lorem ipsum .....  lorem ipsum .....
                  </div>
                    <div className="bg-gray-100 rounded-b-xl rounded-tr-xl p-2 w-[fit-content] max-w-[370px]">
                    lorem ipsum .....   lorem ipsum .....  lorem ipsum .....  lorem ipsum .....
                  </div>
                  <div className="bg-blue-400 text-white rounded-b-xl rounded-tl-xl p-2 w-[fit-content] max-w-[400px] ml-auto">
                   lorem ipsum .....   lorem ipsum .....  lorem ipsum .....  lorem ipsum .....
                  </div>
               </div>
         
               {/* footer */}
               <div className="h-[12vh] flex items-center">
                  <div className="w-[95%] mx-auto flex  gap-x-4 items-center">
                     <InputField onInput={handleInput} />
                     <BsFillSendFill size={22} onClick={handleSendMessage} />
                     <FaPlus size={22} />
                  </div>
               </div>
            </div>
            {/* )} */}
            </div>

            <div className="w-[25%] bg-blue-200/30 h-screen">
               <button onClick={ () => { setUserOnLogout(); logout(); navigate("/sign-in"); }}>logout</button>
               <hr />
               <div>
                 <p className="text-xl px-2 font-semibold">Conversations</p>
               </div>
            </div>
        </div>
    );
}


export default Dashboard;