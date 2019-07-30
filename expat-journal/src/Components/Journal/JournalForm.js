import React, { useState, useEffect } from 'react'

const JournalForm = ({list, setList, postEdit, setPostEdit, editPost}) => {
const [post, setPost] = useState({name: "", submission: "", traveler: ""});

useEffect(() => {

    if (postEdit) {
        setPostEdit(postEdit)
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
    }else if (
        post.name !== "" &&
        post.submission !== "" &&
        post.traveler !== ""
    ) {
        setList([...list, post])
    }
        setPost({ name: "", email: "", traveler: "" });
  };
    const styled = {
      backgroundColor: '#C9E5EB',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      font: 'times-new-roman'
    }

    return (
     <form onSubmit={handleSubmit}>
            <span>{postEdit ? "Edit a Post" : "Add a Post"}</span> 
      <fieldset className = "field-container" style ={styled}>
            <label htmlFor="name">
             Name:{" "}
             <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={post.name}
                onChange={handleChange}
              />
            </label>
             <label htmlFor="traveler">
           Traveler Type:{" "}
           <input
             list="traveler"
             name="traveler"
             placeholder="Traveler Type"
             value={post.traveler}
             onChange={handleChange}
           />
           <br/>
            <label htmlFor="submission">
             Submit a Post :{" "}
             <textarea cols={52} rows={18}
                type="submission"
                name="submission"
                placeholder="Enter Post Here"
                value={post.submission}
                onChange={handleChange}
             />
            </label>
          <datalist id="traveler">
            <option value="Expatriate" />
            <option value="World Traveler" />
            <option value="Backpacker" />
            <option value="Photographer" />
            <option value="Traveling for Work" />
          </datalist>
        </label>
        <input type="submit" value="Submit" />    
      </fieldset>
     </form>
    );

};

export default JournalForm