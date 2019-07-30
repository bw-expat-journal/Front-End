import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import axios from 'axios';


const NewAccount = () => {

    const [inputs, setInputs] = useState({ firstName: '', lastName: '',password0:'', password1:''});

    
    const handleSubmit = (event) => {
        console.log('UserState: ', inputs)
        if (event) {
            event.preventDefault();
        }
     
    }

    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name] : event.target.value }))
    }

    useEffect(() => {
        const registerUser = () => {
          axios.get('https://expat-journals.herokuapp.com/api/v1/auth/signup')
    
          .then(response => {
            console.log('user', response)
            const user = response.data
            setInputs(user)
          })
    
          .catch(error => {
            console.log('ERROR', error)
          })
        }
        
        registerUser();
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      }, []);
    




      

    return (

        <Form onSubmit = {handleSubmit}>
            <Legend>Create an Account</Legend>
           <div>
            <Inputs>
                <label>First Name</label>
                <Inputt type = 'text' name = 'firstName' placeholder = 'First Name' onChange = {handleChange} value = {inputs.firstName} required/>
            </Inputs>
            <Inputs>
                <label>Last Name</label>
                <Inputt type = 'text' name = 'lastName' placeholder = 'Last Name' onChange = {handleChange} value = {inputs.lastName} required/>
            </Inputs>
            <Inputs>
            <label>Enter Your Email</label>
                <Inputt type = 'email' name = 'email' placeholder = 'Enter Your Email Here' onChange = {handleChange} value = {inputs.email} required/>
            </Inputs>
            <Inputs>
            <label>Password</label>
                <Inputt type = 'password' name = 'password0' placeholder = 'Create a Password' onChange = {handleChange} value = {inputs.password0} required/>
            </Inputs>
            <Inputs>
            <label>Re-enter Password</label>
                <Inputt type = 'password' name = 'password1' placeholder = 'Re-enter Your Password' onChange = {handleChange} value = {inputs.password1} required/>
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