import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.confiq";
import { Link } from "react-router-dom";
const Register = () => {
  const [isShow,setISShow]= useState(false)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth(app);

  const handleBtnSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please Add at least one upercase");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      // console.log(/(?=.*[!@#$&*])/.test(password));
      // console.log('from special char');
      setError("Please add at least one special charecter");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
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
        sendVerificationEmail(result.user);
        updateUserData(result.user, name);

        // setUser(loggedUser)
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });

    console.log(email, password);
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then((result) => {
        console.log(result);
        alert("Please Verify your email");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
      photoURL:
        "https://img.freepik.com/free-photo/islamic-new-year-decoration-with-praying-beads-lantern_23-2148950325.jpg?w=1060&t=st=1681718367~exp=1681718967~hmac=cfbfe646e6485928d2c51a340c94b81a375a1706cb3c0187f499b2d80b40c9f7",
    })
      .then(() => {
        alert("Profile updated ");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // --------------show pass-------------------
  const handleShowPass = (event) => {
    setISShow( event.target.checked)
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
            className="mb-3"
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required={true}
          />
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
            type={isShow?"text":"password"}
            required={true}
          />
        </div>
        <div  className="flex items-center gap-2">
          <Checkbox onChange={handleShowPass} id="showpass" />
          <Label htmlFor="showpass">Show Password</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Allow all terms and condition</Label>
        </div>
        <div>
          <Button className="w-28" type="submit">
            Submit
          </Button>
          <p>
            <small>
              Already have an account?Please{" "}
              <Link className="underline font-bold text-blue-700" to="/login">
                Login
              </Link>
            </small>
          </p>
        </div>
        {error ? (
          <p className="text-1xl font-bold text-red-700">{error}</p>
        ) : (
          <p className="text-1xl font-bold text-green-700">{success}</p>
        )}
        {/* <p className="text-1xl font-bold text-red-700">{error}</p>
        <p className="text-1xl font-bold text-green-700">{success}</p> */}
      </form>
    </div>
  );
};

export default Register;
