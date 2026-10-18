import { useState } from "react";

const SignUp = () => {

    const [data , setData] = useState({
        name:'',
        email:'',
        password:''
    });

    console.log(data);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("you clicked submit handle button");
    }


    const handleInput = (e) => {

        setData({
            ...data, 
            [e.target.name]:e.target.value
        });

    }


    return(
        <>
        <form className="flex flex-col justify-center gap-y-2 w-1/5 block mx-auto mt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-1">
              <label>First Name</label>
              <input type="text" placeholder="Your Name" className="border-b" value={data.name} name="name" onChange={handleInput} />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>Email Address</label>
              <input type="email" placeholder="Your Name" className="border-b" value={data.email}  name="email" onChange={handleInput}/>
            </div>
            <div className="flex flex-col gap-y-1">
              <label>Password</label>
              <input type="text" placeholder="Your Name" className="border-b" value={data.password} name="password" onChange={handleInput}/>
            </div>
            <div>
              <button type="submit" className="bg-blue-600 text-white px-2.5 py-2 rounded-md">Sign Up</button>
              <div>
                <p className="flex gap-x-1">Already have an account? <span>sign in</span></p>
              </div>
            </div>
        </form>
        </>
    );
}


export default SignUp;