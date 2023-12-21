import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/mentoraxios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Userlogin = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginSubmit = () => {
    const data = {
      name: name,
      password: password,
    };

    axiosInstance.post("mentorlogin/", data).then((res) => {
      console.log(res.data);
      const tokens = {
        access: res.data.access,
        refresh: res.data.refresh,
      };
      Cookies.set("userDetails", JSON.stringify(res.data.userdata));
      Cookies.set("accessToken", JSON.stringify(res.data.access));
      // localStorage.setItem("userDetails", JSON.stringify(res.data.userdata));
      // localStorage.setItem("accessToken", JSON.stringify(res.data.access));
      if (res.data.message === "success") 
      navigate("mentordashboard/");
    });
  };

  return (
    <div className="wrapper">
      <h2>MENTOR LOGIN </h2><br />
      <div className="form-field">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div className="form-field">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div><br />
      <button className="btn" onClick={loginSubmit}>
        Login
      </button>
      <br /><br />
      <p>
        Don't have an account? <Link to="/mentorsignup">Sign Up here</Link>
      </p>
    </div>
  );
};

export default Userlogin;
