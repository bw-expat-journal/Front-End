import React, { useState, useEffect } from 'react';

const JournalForm = ({ list, setList, postEdit, setPostEdit, editPost }) => {
const [post, setPost] = useState({location: "", traveler: "", submission: ""});

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
        post.submission !== "" 
    ) {
        setList([...list, post])
    }
        setPost({ location: "", traveler: "", submission: "" });
  };
    

    return (
     <form onSubmit={handleSubmit}>
      <fieldset> 
            <legend>{postEdit ? "Edit a Post" : "Add a Post"}</legend> 
            <label htmlFor="location">
             Location:{" "}
             <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={post.location}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="traveler">
              Traveler Type: {" "}
              <input
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
            <label htmlFor="submission">
             Submit a Post:{" "}
             <textarea cols={30} rows={1}
                type="text"
                name="submission"
                placeholder="Enter Post Here"
                value={post.submission}
                onChange={handleChange}
             />
            </label>
        <input type="submit" value="Submit" />    
      </fieldset>
     </form>
    );

};

export default JournalForm

