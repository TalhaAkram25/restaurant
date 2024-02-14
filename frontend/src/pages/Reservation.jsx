import React from "react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      alert("Reservation sent successfully!");
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          marginLeft: "480px",
          marginRight:"15px",
          boxShadow: "0 0 32px rgba(93, 194, 175, 0.5)",
          marginTop: "80px",
          paddingRight: "18px",}}
        className="card reserve">
        <div style={{ marginLeft: "22px" }}>
          <div
          className="reserve-text"
            style={{
              fontSize: "46px",
              fontWeight: "lighter",
              marginBottom: "0px",}}>
            MAKE A RESERVATION
          </div>
          <p className="reserve-text2" style={{ marginLeft: "70px", marginBottom: "25px" }}>
            For Further Questions, Please Call
          </p>
          <form>
            <div className="">

            <div className="reserve-block">
              {/* FIRST NAME STARTS */}
              <input
                style={{
                  border: " none",
                  borderBottom: "1px solid #ccc",
                  outline: "none"}}
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
                {/* LAST NAME STARTS */}
              <input
              className="reserve-margin"
                style={{
                  border: " none",
                  borderBottom: "1px solid #ccc",
                  outline: "none",
                  marginLeft: "30px"}}
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="reserve-block">
              {/* DATE STARTS */}
              <input
                style={{
                  border: " none",
                  borderBottom: "1px solid #ccc",
                  outline: "none",
                  width: "120px",
                  marginTop: "15px"}}
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}/>
                {/* TIME STARTS */}
              <input
              className="reserve-margin"
                style={{
                  border: " none",
                  borderBottom: "1px solid #ccc",
                  outline: "none",
                  marginLeft: "40px",
                  width: "130px"}}
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div className="reserve-block">
              {/* EMAIL STARTS */}
              <input
                style={{
                  border: " none",
                  borderBottom: "1px solid #ccc",
                  outline: "none",
                  marginTop: "15px"}}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                {/* PHONE STARTS */}
              <input
              className="reserve-margin"
                style={{
                  border: " none",
                  borderBottom: "1px solid #ccc",
                  outline: "none",
                  marginLeft: "30px",
                  width: "130px"}}
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
            </div>
            {/* SUBMIT RESERVATION BUTTON */}
            <button
              className="btn reserve-btn"
              style={{
                background: "transparent",
                border: "1px solid black",
                borderRadius: "25px",
                marginTop: "20px",
                marginLeft: "110px",
                marginBottom: "20px",
                backgroundColor: "rgba(152, 251, 152, 0.5)"}}
              type="submit"
              onClick={handleReservation}>
              RESERVE NOW
            </button>
                </div>
          </form>
        </div>
      </div>
      <img style={{ height: "533px" }} src="./fruit2.webp" alt="" />
    </>
  );
};

export default Reservation;
