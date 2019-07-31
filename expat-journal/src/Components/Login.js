import React, { Component,useState } from 'react';
import axios from 'axios';


const initialUser = {
    email: '',
    password: '',
  }


export default function Login(props) {
    // console.log(props)
    const [user, setUser] = useState({ email: "", password: "" })

    function inputHandler(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        // console.log(
        //   "inputHandler",
        //   event.target.name,
        //   event.target.value,
        //   updatedUser
        // );
        setUser(updatedUser);
      }
      
    
    function submitHandler(event) {
        event.preventDefault();
        // console.log("user state", user);
        
  
        // add heruko api link here:
        axios.post(`https://expat-journals.herokuapp.com/api/v1/auth/login`, user)
          .then(res => {
              console.log(res.data);
            if (res.status === 200 && res.data) {
              localStorage.setItem('jwt', res.data.token)
              // props.history.push('/')
            }
          })
          .catch(err => {
            //setUser({
              //message: 'Authentication failed',
              //user: { ...initialUser }
            //})
            if (err) console.log(err)
          })
      
        }  

return (
    <div className="login-form">
    <div className="container">

    <form onSubmit={submitHandler}>
          <section>
            <h1>Login Page</h1>
          </section>
    <label htmlFor="email">email</label>
    <input className="input" 
        type="text"
        id="email" 
        name="email" required
        placeholder="Enter your email"
        value={user.email}
        onChange={inputHandler}
        />
    
    <label className="label">Password</label>
    <input className="input" 
        type="password"
        id="password" 
        name="password" required 
        placeholder="Enter password"
        value={user.password}
        onChange={inputHandler}
        />
    
    <button type="submit">Submit</button>
    </form>
    {/* {message
          ? (<h4>{message}</h4>)
          : undefined
        }  */}
    </div>
</div>
  );
}