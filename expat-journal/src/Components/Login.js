import React, { Component,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

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
              localStorage.setItem('token', res.data.token)
              props.history.push('/')
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
    <Content className="login-form">
    <div className="container">

    <Form onSubmit={submitHandler}>
          <Content>
            <Legend>Log In to Your Account </Legend>
            <Span>Welcome Back</Span>
          </Content>
    <Label htmlFor="email">Email</Label>
    <Inputt className="input" 
        type="text"
        id="email" 
        name="email" required
        // placeholder="Enter your email"
        value={user.email}
        onChange={inputHandler}
        />
    
    <Label className="label">Password</Label>
    <Inputt className="input" 
        type="password"
        id="password" 
        name="password" required 
        // placeholder="Enter password"
        value={user.password}
        onChange={inputHandler}
        />
    
    <Button type="submit">Submit</Button>
    </Form>
    {/* {message
          ? (<h4>{message}</h4>)
          : undefined
        }  */}
    </div>
    <Previous class = "previous">Need an account? <Link to = '/sign-up'>Sign Up</Link></Previous>
</Content>
  );
}


///Styled Components

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #f1ffff;
padding: 5px;
margin:5px;
border-radius: 8px;
color: #1f4852;
font-size: 20px;
width: 31rem;
margin-top: 7rem;
height: 25rem;

`
const Legend = styled.legend`
font-size: 35px;
margin: 26px;
`

const Button = styled.button`
border-radius: 8px;
border: none;
color: white;
padding: 15px 32px;
margin: 15px;
margin-top: 15px;
background: #3C8C9E
font-size: 1rem;
`
const Label = styled.div`
margin: 5px;
`

const Inputt = styled.input`
border: solid 1.8px #aacddf;
border-radius: 8px;
width: 27rem;
height: 2rem;
margin-bottom: 15px;
`
const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Previous = styled.div`
text-align: center;
margin-top: 30px;
margin-bottom: 6rem;
font-size: 18px;
color: #1f4852

`
const Span = styled.span`
margin-bottom: 23px;
font-size: 24px;

`