import axios from "axios";
import React, { useState } from "react";

const Join = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const data = await axios.post(
          "http://localhost:3333/auth/local/signup",
          {
            name,
            email,
            password,
          }
        );
        console.log(data);
        console.log("data");
      }}
    >
      <div>name</div>
      <input
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="border-2 border-blue-500/75"
        type="text"
      />
      <div>Email address</div>
      <input
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border-2 border-blue-500/75"
        type="text"
      />
      <div>password</div>
      <input
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="border-2 border-blue-500/75"
        type="password"
      />
      <div>password Confirm</div>
      <input
        required
        onChange={(e) => {
          setPasswordConfirm(e.target.value);
        }}
        className="border-2 border-blue-500/75"
        type="password"
      />
      <button className="border-2 border-black" type="submit">
        Create Account
      </button>
    </form>
  );
};

export default Join;
