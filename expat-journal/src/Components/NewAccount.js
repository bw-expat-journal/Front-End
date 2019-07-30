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
          axios.post('https://expat-journals.herokuapp.com/api/v1/auth/signup')
    
          .then(response => {
            console.log('user', response)
            const user = response
             setInputs(user)
          })
    
          .catch(error => {
            console.log('ERROR', error)
          })
        }
        
        registerUser();
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      }, []);
    



                        // Add PlaceHolders to Input Bar!

    return (

        <Form onSubmit = {handleSubmit}>
            <Legend>Create an Account</Legend>
           <div>
            <Inputs>
                <label>First Name</label>
                <Inputt type = 'text' name = 'firstName' onChange = {handleChange} value = {inputs.firstName} required/>
            </Inputs>
            <Inputs>
                <label>Last Name</label>
                <Inputt type = 'text' name = 'lastName' onChange = {handleChange} value = {inputs.lastName} required/>
            </Inputs>
            <Inputs>
            <label>Enter Your Email</label>
                <Inputt type = 'email' name = 'email' onChange = {handleChange} value = {inputs.email} required/>
            </Inputs>
            <Inputs>
            <label>Password</label>
                <Inputt type = 'password' name = 'password0' onChange = {handleChange} value = {inputs.password0} required/>
            </Inputs>
            <Inputs>
            <label>Re-enter Password</label>
                <Inputt type = 'password' name = 'password1' onChange = {handleChange} value = {inputs.password1} required/>
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