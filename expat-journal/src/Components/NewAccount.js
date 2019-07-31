import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import axios from 'axios';


const NewAccount = () => {

    const [inputs, setInputs] = useState({ first_name: '', last_name: '', password:'', confirm_password:'', email: ''});

    const registerUser = (newUser) => {
        axios.post('https://expat-journals.herokuapp.com/api/v1/auth/signup',newUser)
  
        .then(response => {
          console.log('user', response.data.token)
          localStorage.setItem('token', response.data.token)
          
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

        <Form onSubmit = {handleSubmit}>
            <Legend>Create an Account</Legend>
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
    )
}

export default NewAccount;

///Styled Components

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #c9e5eb
padding: 5px;
margin:5px;
border-radius: 8px;
color: #1f4852;
font-size: 20px;

`
const Legend = styled.legend`
font-size: 28px;
margin: 5px;
`

const Button = styled.button`
border-radius: 8px;
background-color: white;
color:blue;
border: blue;
padding: 15px 32px;
`
const Inputs = styled.div`
margin: 5px;
display: flex;
flex-direction: column;
`

const Inputt = styled.input`
border: solid 2px #3c8c9e;
border-radius: 8px;
width: 27rem;
height: 2rem;
`