import React from "react";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/form/contact",
        { username, email, phone, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      alert("Message sent successfully");
      setUsername("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Enter valid Email or phone");
      alert("Enter valid Email or phone");
    }
  };

  return (
    <>
      <center>
        <div className="mt-2" style={{ fontSize: "49px" }}>
          Contact US
        </div>
      </center>
      <form>
        <div
          style={{
            marginTop: "30px",
            marginRight: "200px",
            marginLeft: "220px",
            marginBottom: "70px",
            boxShadow: "0 0 32px rgba(93, 194, 175, 0.5)"}}
          className="card contact-card">
          <div 
          className="contact-content "
            style={{
              marginBottom: "40px",
              marginTop: "30px",
              marginLeft: "40px"}}>
            <div className="contact-margin" style={{ marginLeft: "40px" }}>
              <div className="mb-2">
                Fill out this form to stay in touch with us.
              </div>
              {/* name starts */}
              <div className="d-flex mb-1">
              <label for="exampleFormControlInput1" className="form-label mb-0">
                Enter your Full Name
              </label>
              <div className="text-danger">*</div>
              </ div>
              <input
                className="form-control dfault"
                style={{ width: "60%", border: "2px solid grey" }}
                type="text"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
              <div className="d-flex contact-email-phone">
                <div className="d-block">
                  {/* email starts */}
                  <div className="d-flex mb-1 mt-2">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mb-0">
                    Enter your Email
                  </label>
                  <div className="text-danger">*</div>
                      </div>
                  <input
                    style={{ width: "350px", border: "2px solid grey" }}
                    className="form-control dfault"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                {/* phone starts */}
                <div className="d-block">
                  <label
                    style={{ marginLeft: "43px" }}
                    for="exampleFormControlInput1"
                    className="form-label mb-0 phone-label">
                    Enter your Phone Number
                  </label>
                  <input
                    style={{
                      width: "350px",
                      marginLeft: "40px",
                      border: "2px solid grey"}}
                    className="form-control phone-label dfault"
                    type="number"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}/>
                </div>
              </div>
              {/* message starts */}
              <div className="d-flex mb-1 mt-2">
              <label for="exampleFormControlInput1" className="form-label mb-0">
                Enter your Message
              </label>
              <div className="text-danger">*</div>
              </div>
              <textarea
                style={{ width: "60%", border: "2px solid grey" }}
                className="form-control dfault2"
                type="text"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}/>
              <div>
                {/* send message button */}
                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: "transparent",
                    border: "1px solid black",
                    borderRadius: "25px",
                    marginTop: "20px",
                    backgroundColor: "rgba(152, 251, 152, 0.5)"}}
                  onClick={handleContact}>
                  SEND MESSAGE
                </button>
                <div className="d-flex mt-2">
                  <div className="text-danger">*</div><div className="text-muted mx-1">are required fields.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
