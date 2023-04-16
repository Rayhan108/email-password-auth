
import React, { useState } from 'react';

const Login = () => {
    const [email,setEmail] =useState('')
const [password,setPassword] =useState('')

const handleEmailChange=e=>{
    console.log(e.target.value);
    setEmail(e.target.value)
}

const handlePasswordBlur=e=>{
    console.log(e.target.value);
    setPassword(e.target.value)
}

const handleBtnSubmit =event=>{
    event.preventDefault()
    const email =event.target.email.value;
    const password =event.target.password.value;
    console.log(email,password);
        }

    return (
        <div>
            <h1 className='text-3xl font-bold mb-10'>Provide Your Email And Password</h1>
         <form onSubmit={handleBtnSubmit} className=''>
           <div >
           <input onChange={handleEmailChange} className='h-10 rounded-md p-5 w-1/2 bg-slate-100' type="email" name='email' id='email' placeholder='email' />
           </div>
           <div>
           <input onBlur={handlePasswordBlur} className='h-10 rounded-md p-5 w-1/2 bg-slate-100 mt-5' type="password" name='password' id='password' placeholder='password' />
           </div>
           <div>
           <input className='rounded-md p-5  mt-5 bg-amber-300' type="submit" value='Submit' />
           
           </div>
         </form>


        </div>
    );
};

export default Login;