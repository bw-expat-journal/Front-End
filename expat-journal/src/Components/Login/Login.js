import React, { Component, useState } from 'react';
import axios from 'axios';

export default function Login(props) {
    const [username, setUsername] = useState({})
  

return (
    <div className="login-form">
    <div className="container">
    <form>
    <label className="label">Email Address</label>
    <input className="input" type="email" name="email" required />
    
    <label className="label">Password</label>
    <input className="input" type="password" name="password" required />

    </form>
    </div>
</div>
);
}