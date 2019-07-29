import React from 'react';

const NewAccount = () => {
    return (

        <form>
            <div>
                <label>First Name</label>
                <input type = 'text' name = 'firstName' required/>
                <label>Last Name</label>
                <input type = 'text' name = 'lastName' required/>
            </div>
            <div>
            <label>Enter Your Email</label>
                <input type = 'email' name = 'email' required/>
            </div>
            <div>
            <label>Password</label>
                <input type = 'password' name = 'password' required/>
            </div>
            <div>
            <label>Re-enter Password</label>
                <input type = 'password' name = 'password1' required/>
            </div>
            <button type = 'submit' >Sign Up</button>
        </form>
    )
}

export default NewAccount;

