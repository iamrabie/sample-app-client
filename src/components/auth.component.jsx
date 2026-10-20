import { useState, useEffect , useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.context";
import { UserContext } from "../context/user.context";


const Auth = ({ isSignedIn }) => {
  
  const [data, setData] = useState({
    ...(!isSignedIn && { name: "" }),
    email: "",
    password: "",
  });


  const { login , logout } = useContext(AuthContext);
  const { setUserOnLogin  , setUserOnLogout } = useContext(UserContext);
  // console.log(data);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/yap/users/sign-up" , {
      method:"POST",
      headers: {
      'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).
    then((res) => res.json()).
    then(data => console.log("DATA ::::" , data));

  };


  const handleSignIn = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/yap/users/sign-in" , {
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).
    then(res => res.json()).
    then(data => {
      setUserOnLogin(data?.data);
      login(data?.data?.token);
    });
    
  }

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        className="flex flex-col justify-center gap-y-2 w-1/5 block mx-auto mt-5"
        onSubmit={isSignedIn ? handleSignIn : handleSignUp}
      >
        {!isSignedIn && (
          <div className="flex flex-col gap-y-1">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border-b"
              value={data.name}
              name="name"
              onChange={handleInput}
            />
          </div>
        )}
        <div className="flex flex-col gap-y-1">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Your Name"
            className="border-b"
            value={data.email}
            name="email"
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label>Password</label>
          <input
            type="text"
            placeholder="Your Name"
            className="border-b"
            value={data.password}
            name="password"
            onChange={handleInput}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-2.5 py-2 rounded-md"
          >
            {!isSignedIn ? "Sign Up" : "Sign In"}
          </button>
          <div>
            {!isSignedIn ? (
              <p className="flex gap-x-1">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    navigate("/sign-in");
                  }}
                  className="underline text-blue cursor-pointer"
                >
                  sign in
                </span>
              </p>
            ) : (
              <p className="flex gap-x-1">
                Create an account now{" "}
                <span
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                  className="underline text-blue cursor-pointer"
                >
                  sign up
                </span>
              </p>
            )}

            <button onClick={ () => { setUserOnLogout(); logout(); }}>logout</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Auth;
