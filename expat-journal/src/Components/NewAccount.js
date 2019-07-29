import React, { useState }from 'react';
//import signUpForm from './customHooks'


// const {inputs, handleChange, handleSubmit} = signUpForm(signUP);

// const signUP = () => {
//     alert(`New User !! Name: ${inputs.firstName} ${inputs.lastName}
//     Email: ${inputs.email}`)
// }

const NewAccount = () => {


//     const {inputs, handleChange, handleSubmit} = signUpForm(signUP);

// const signUP = () => {
//     alert(`New User !! Name: ${inputs.firstName} ${inputs.lastName}
//     Email: ${inputs.email}`)
// }


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

    return (

        <form onSubmit = {handleSubmit}>
            <div>
                <label>First Name</label>
                <input type = 'text' name = 'firstName' onChange = {handleChange} value = {inputs.firstName} required/>
                <label>Last Name</label>
                <input type = 'text' name = 'lastName' onChange = {handleChange} value = {inputs.lastName} required/>
            </div>
            <div>
            <label>Enter Your Email</label>
                <input type = 'email' name = 'email' onChange = {handleChange} value = {inputs.email} required/>
            </div>
            <div>
            <label>Password</label>
                <input type = 'password' name = 'password0' onChange = {handleChange} value = {inputs.password0} required/>
            </div>
            <div>
            <label>Re-enter Password</label>
                <input type = 'password' name = 'password1' onChange = {handleChange} value = {inputs.password1} required/>
            </div>
            <button type = 'submit' >Sign Up</button>
        </form>
    )
}

export default NewAccount;

