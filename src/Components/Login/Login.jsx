import React from 'react';

const Login = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-10'>Provide Your Email And Password</h1>
         <form className=''>
           <div >
           <input className='h-10 rounded-md p-5 w-1/2 bg-slate-100' type="email" name='email' id='email' placeholder='email' />
           </div>
           <div>
           <input className='h-10 rounded-md p-5 w-1/2 bg-slate-100 mt-5' type="password" name='password' id='password' placeholder='password' />
           </div>
           <div>
           <input className='rounded-md p-5  mt-5 bg-amber-300' type="submit" value='Submit' />
           </div>
         </form>
        </div>
    );
};

export default Login;