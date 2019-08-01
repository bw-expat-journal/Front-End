import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';


const JournalForm = ({ list, setList, postEdit, setPostEdit, editPost }) => {
const [post, setPost] = useState({location: "", traveler: "", message: ""});

useEffect(() => {

    if (postEdit) {
        setPost(postEdit)
    }

    }, [postEdit])


    const handleChange = e => {
        const updatedPost = {
            ...post,
            [e.target.name]: e.target.value
        };
        setPost(updatedPost)
    };

    const handleSubmit = e => {
    e.preventDefault();
    if (postEdit) {
        editPost(post);
        setPostEdit(null);
    } else if (
        post.location !== "" &&
        post.traveler !== "" &&
        post.message !== "" 
    ) {

      const sendPost = () => {
        axios({
          url:'https://expat-journals.herokuapp.com/api/v1/journals',
          method: 'post',
          headers: {
            Authorization: localStorage.getItem('token')
          },
          data:{
            message: post.message,
            location: post.location
           }
        })
        .then((res) => {
          setList([ res.data.journal, ...list])
        })
        .catch(err => {
        })
      }
      sendPost();

        
    }
        setPost({ location: "", traveler: "", message: "" });
  };
    

    return (
     <Form onSubmit={handleSubmit}>
      <fieldset className = "fieldbox"> 
            <legend className = "legend">{postEdit ? "Edit a Post" : "Add a Post"}</legend> 
            <label htmlFor="location">
             Location:{" "}
             <input className = "location"
                type="text"
                name="location"
                placeholder="Enter location"
                value={post.location}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="traveler">
              Traveler Type: {" "}
              <input className = "travel"
               list="traveler"
               name="traveler"
               placeholder="Traveler Type"
               value={post.traveler}
               onChange={handleChange}
               />
              <datalist id="traveler">
                <option value="Expatriate" />
                <option value="World Traveler" />
                <option value="Backpacker" />
                <option value="Photographer" />
                <option value="Traveling for Work" />
              </datalist>
            </label>
            <label htmlFor="message">
             Submit a Post:{" "}
             <textarea cols={30} rows={10}
                type="text"
                name="message"
                placeholder="Enter Post Here"
                value={post.message}
                onChange={handleChange}
             />
            </label>
        <input className = "button" type="submit" value="Submit" />    
      </fieldset>
     </Form>
     

    );

};

export default JournalForm


const Form = styled.form`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
display: flex;
justify-content: center;
padding: 3px;

background: #C9E5EB;

color: #1f4852;
font-size: 20px;
text-align: center;

legend {
  font-size: 1.5rem;
  font-family: 'Raleway', sans-serif;
}

label {
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
}

.fieldbox {
  background-color: #f1ffff;
  margin: 60px;
  width: 600px;
  border: solid 1.8px #aacddf
  border-radius: 8px;
  width: 600px;
  border: solid 1.8px #aacddf

}

textarea {
  border-radius: 8px;
  border: solid 1.8px #aacddf;
  margin: 8px;
}

.travel {
  margin: 8px;
  border-radius: 8px;
  height: 2rem;
  border: solid 1.8px #aacddf
}


.location {
  margin: 8px;
  border-radius: 8px;
  height: 2rem;
  border: solid 1.8px #aacddf
}

.button {
  border-radius: 8px;
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 15px;
  margin-top: 15px;
  background: #3C8C9E
  font-size: 1rem;
}

`