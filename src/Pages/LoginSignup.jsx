import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  // Function to toggle between Login and Sign Up
  const toggleState = (newState) => {
    setState(newState);
  };

  const login=async()=>{
    console.log("Login function executed",formData);
    let responseData;
    await fetch('https://e-commerce-api-git-main-niraj142316s-projects.vercel.app/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }
  const signup=async()=>{
    console.log("Signup function executed",formData);
    let responseData;
    await fetch('https://e-commerce-api-git-main-niraj142316s-projects.vercel.app/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name' />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>state==="Login"?login():signup()}>Continue</button>
        <p className='loginsignup-login'>
          {state === "Sign Up" ?
            <>Already have an account? <span onClick={() => toggleState("Login")}>Login here</span></> :
            <>New User? Create an account! <span onClick={() => toggleState("Sign Up")}>Click here</span></>
          }
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
