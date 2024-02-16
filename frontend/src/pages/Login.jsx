import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email , setemail] = useState("");
   const [password , setpassword] = useState("");
   let navigate = useNavigate();

   const handleSubmit = async (e) =>{
    e.preventDefault();
            const response = await fetch(
            "http://localhost:4000/api/v1/login/loginuser",     
        { method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          body: JSON.stringify({ email: email, password: password })
          
        } );
            const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        if (json.success) {
            localStorage.setItem("authToken", json.authToken)
            alert("logged in successfully!") 
            navigate("/")
        } 
   
        
    
   }
  return (
    <>
    <form onSubmit={handleSubmit}>
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

export default Login