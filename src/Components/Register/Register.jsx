import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.confiq";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth(app);

  const handleBtnSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please Add at least one upercase");
      return;
    }
     else if (!/(?=.*[!@#$&*])/.test(password)) {
      // console.log(/(?=.*[!@#$&*])/.test(password));
      // console.log('from special char');
      setError("Please add at least one special charecter");
      return;
    }
    console.log('fdgtrtrthrt');
     if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two number");
      return;
    } else if (!/(?=.*[a-z].*[a-z])/.test(password)) {
      setError("Please add at least two lowercase");
      return;
    } else if (!/.{8}/.test(password)) {
      setError("Please must be 8 charecter");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        setError("");
        event.target.reset();
        setSuccess("Account has been created succesfully");
        // setUser(loggedUser)
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
    console.log(email, password);
  };
  return (
    <div>
      <h1>Register Now</h1>
      <form
        onSubmit={handleBtnSubmit}
        className="flex flex-col gap-4  w-1/2 mx-auto"
      >
        <div>
          <div className="mb-2 block"></div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block"></div>
          <TextInput
            name="password"
            id="password1"
            type="text"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Allow all terms and condition</Label>
        </div>
        <Button className="w-28" type="submit">
          Submit
        </Button>
        {error ? (
          <p className="text-1xl font-bold text-red-700">{error}</p>
        ) : (
          <p className="text-1xl font-bold text-green-700">{success}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
