import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.confiq';

const Register = () => {
    const [user,setUser]=useState(null)
    const auth =getAuth(app);

    const handleBtnSubmit =event=>{
event.preventDefault()
const email =event.target.email.value;
const password =event.target.password.value;
createUserWithEmailAndPassword(auth, email, password)
.then(result=>{
    const loggedUser = result.user;
    console.log(loggedUser);
    // setUser(loggedUser)
})
.catch(error=>{
    console.error(error)
})
console.log(email,password);
    }
    return (
        <div>
            <h1>Register Now</h1>
            <form onSubmit={handleBtnSubmit} className="flex flex-col gap-4  w-1/2 mx-auto">
  <div>
    <div className="mb-2 block">
     
    </div>
    <TextInput
  
      id="email1"
      type="email"
      name="email"
      placeholder="name@flowbite.com"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
  
    </div>
    <TextInput
    name="password"
      id="password1"
      type="password"
      required={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Allow all terms and condition
    </Label>
  </div>
  <Button className='w-28' type="submit">
    Submit
  </Button>
</form>
        </div>
    );
};

export default Register;