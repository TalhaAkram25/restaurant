import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const { data } = await axios.post(
            "http://localhost:4000/api/v1/createuser/user", 
            { firstname,lastname,email,password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          
        } 
            );
            alert("User registered successfully!");
            setfirstname("");
            setlastname("");
            setemail("");
            setpassword("");
            navigate('/login');
        } catch (error) {
            alert("error in registering user!")
        }
    }
  return (
    <>
    
    <form onSubmit={handleSubmit}>
        <input
         type="text" 
         placeholder="First Name"
         onChange={(e) => setfirstname(e.target.value)} 
         value={firstname}/>
         <input
         type="text" 
         placeholder="Last Name"
         onChange={(e) => setlastname(e.target.value)} 
         value={lastname}/>
         <input
         type="email" 
         placeholder="Email"
         onChange={(e) => setemail(e.target.value)} 
         value={email}/>
         <input
         type="password" 
         placeholder="Password"
         onChange={(e) => setpassword(e.target.value)} 
         value={password}/>
         <button type="submit">Submit</button>
    </form>

    </>
  )
}

export default Signup