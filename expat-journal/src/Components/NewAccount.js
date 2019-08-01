import React, { useState }from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom'


const NewAccount = (props) => {

    const [inputs, setInputs] = useState({ first_name: '', last_name: '', password:'', confirm_password:'', email: ''});

    const registerUser = (newUser) => {
        axios.post('https://expat-journals.herokuapp.com/api/v1/auth/signup',newUser)
  
        .then(response => {
          console.log('user', response.data.token)
          localStorage.setItem('token', response.data.token)
          props.history.push('/login')

          
        })
  
        .catch(error => {
          console.log('ERROR', error.response)
        })
      }

    const handleSubmit = (event) => {
        // console.log('UserState: ', inputs)
        if (event) {
            event.preventDefault();
         registerUser(inputs);     
        }
     
    }

    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name] : event.target.value }))
    }

      
    return (
        <Content>
        <Form onSubmit = {handleSubmit}>
            <Legend>Create an Account</Legend>
            <Span>It's free and only takes a minute</Span>
           <div>
            <Inputs>
                <label>First Name</label>
                <Inputt type = 'text' name = 'first_name' onChange = {handleChange} value = {inputs.first_name} required/>
            </Inputs>
            <Inputs>
                <label>Last Name</label>
                <Inputt type = 'text' name = 'last_name' onChange = {handleChange} value = {inputs.last_name} required/>
            </Inputs>
            <Inputs>
            <label>Enter Your Email</label>
                <Inputt type = 'email' name = 'email' onChange = {handleChange} value = {inputs.email} required/>
            </Inputs>
            <Inputs>
            <label>Password</label>
                <Inputt type = 'password' name = 'password' onChange = {handleChange} value = {inputs.password} required/>
            </Inputs>
            <Inputs>
            <label>Re-enter Password</label>
                <Inputt type = 'password' name = 'confirm_password' onChange = {handleChange} value = {inputs.confirm_password} required/>
            </Inputs>
            </div>
            <Button type = 'submit' >Sign Up</Button>
        </Form>
        <Previous class = "previous">Already Have an Account? <Link to = '/'>Login Here</Link></Previous>
        </Content>
    )
}

export default NewAccount;

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
width: 40rem;
margin-top: 7rem;

`
const Legend = styled.legend`
font-size: 39px;
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
const Inputs = styled.div`
margin: 5px;
display: flex;
flex-direction: column;
`

const Inputt = styled.input`
border: solid 1.8px #aacddf;
border-radius: 8px;
width: 27rem;
height: 2rem;
`

const Span = styled.span`
margin-bottom: 15px;
font-size: 19px;
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