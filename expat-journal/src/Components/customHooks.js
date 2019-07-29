import React, { useState } from 'react';

const signUpForm = (callback) => {

    const [inputs, setInputs] = useState();

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
     
    }

    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name] : event.target.value }))
    }

    return {
        handleSubmit,
        handleChange,
        inputs
    };
}

export default signUpForm;