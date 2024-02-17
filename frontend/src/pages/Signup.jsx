import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/createuser/user",
        { firstname, lastname, email, password },
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
      navigate("/login");
    } catch (error) {
      alert("error in registering user!");
    }
  };
  return (
    <>
      <form
        style={{
          width: "360px",
          height: "350px",
          marginTop: "50px",
          borderRadius: "7px",
          boxShadow: "0 0 25px rgba(93, 194, 175, 0.5)",
        }}
        className="container card ls-form"
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginLeft: "105px" }} className="fs-2 mt-2">
            Sign up
          </div>
          {/* first name */}
          <input
            style={{
              border: " none",
              borderBottom: "1px solid #ccc",
              outline: "none",
            }}
            className="mt-3"
            type="text"
            placeholder="First Name"
            onChange={(e) => setfirstname(e.target.value)}
            value={firstname}
          />
          {/* last name */}
          <input
            style={{
              border: " none",
              borderBottom: "1px solid #ccc",
              outline: "none",
            }}
            className="mt-3"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setlastname(e.target.value)}
            value={lastname}
          />
          {/* email */}
          <input
            style={{
              border: " none",
              borderBottom: "1px solid #ccc",
              outline: "none",
            }}
            className="mt-3"
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
          {/* password */}
          <input
            style={{
              border: " none",
              borderBottom: "1px solid #ccc",
              outline: "none",
            }}
            className="mt-3"
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
          {/* signup  button */}
          <div className="ls-content">

          <button
            style={{
              background: "transparent",
              border: "1px solid black",
              borderRadius: "25px",
              width: "95px",
              padding: "2px",
              backgroundColor: "rgba(152, 251, 152, 0.5)",
              marginLeft: "105px",
            }}
            className="btn mt-4"
            type="submit"
          >
            Sign up
          </button>
          <div style={{ marginLeft: "80px" }} className="mt-2">
            Already have an account?
          </div>
          {/* login button */}
          <Link to="/login">
            <button
              style={{
                background: "transparent",
                border: "1px solid grey",
                borderRadius: "20px",
                width: "95px",
                marginLeft: "105px",
              }}
              className="mt-2"
            >
              Login
            </button>
          </Link>
              </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
