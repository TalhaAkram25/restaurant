import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:4000/api/v1/login/loginuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      alert("logged in successfully!");
      navigate("/");
    }
  };
  return (
    <>
      <form
        style={{
          width: "360px",
          height: "270px",
          marginTop: "50px",
          borderRadius: "7px",
          boxShadow: "0 0 25px rgba(93, 194, 175, 0.5)",
        }}
        className="container card ls-form"
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginLeft: "105px" }} className="fs-2 mt-2">
            Login
          </div>
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
          {/* login button */}
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
            Login
          </button>
          <div style={{ marginLeft: "80px" }} className="mt-2">
            Don't have an account?
          </div>
          {/* signup button */}
          <Link to="/signup">
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
              Sign up
            </button>
          </Link>
              </div>
        </div>
      </form>
    </>
  );
};

export default Login;
