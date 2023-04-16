import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.confiq";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [success,setSuccess] =useState('')
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleBtnSubmit = (event) => {
    event.preventDefault();
    setError('')
    setSuccess('')
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess('log in successfull')
        setError('')
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">
        Provide Your Email And Password
      </h1>
      <form onSubmit={handleBtnSubmit} className="">
        <div>
          <input
            onChange={handleEmailChange}
            className="h-10 rounded-md p-5 w-1/2 bg-slate-100"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
        </div>
        <div>
          <input
            onBlur={handlePasswordBlur}
            className="h-10 rounded-md p-5 w-1/2 bg-slate-100 mt-5"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>
        <div>
          <input
            className="rounded-md p-5  mt-5 bg-amber-300"
            type="submit"
            value="Submit"
          />
          <p><small>New to this website?please go to <Link className="underline font-bold text-blue-700"  to="/register">Register</Link></small></p>
        </div>
          <p className="text-1xl font-bold text-red-700">{error}</p>
          <p className="text-1xl font-bold text-green-700">{success}</p>
      </form>
    </div>
  );
};

export default Login;
