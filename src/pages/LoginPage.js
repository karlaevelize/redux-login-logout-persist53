import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login, logout } from "../store/user/actions"
import { selectUser } from "../store/user/selectors"

export default function LoginPage() {

  const dispatch = useDispatch()

  const user = useSelector(selectUser)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("user login with:", email, password)
    dispatch(login(email,password))
  }

  return (
    <div>
      <h1>Login</h1>
      {user ? <h2>Welcome, {user.name}</h2> : ""}
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
      <button onClick={() => dispatch(logout)}>Logout</button>
    </div>
  );
}