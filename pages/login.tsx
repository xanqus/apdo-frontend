import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const data = await axios.post(
          "http://localhost:3333/auth/local/signin",
          {
            email,
            password,
          }
        );
        const { access_token } = data.data;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
        console.log(data);
        document.cookie = `access_token=${access_token}`;
      }}
    >
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

      <button className="border-2 border-black" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
