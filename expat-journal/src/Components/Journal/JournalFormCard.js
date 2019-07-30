import React from 'react';

const JournalFormCard = ({ post, setPostEdit }) => {
    return (
      <div className = "user-story-container">
      <h1>Check out recent submissions from our users:</h1>
        <h1>{post.name}</h1>
        <p>
          <p>Post:</p> {post.submission}
        </p>
        <p>
          <p>Traveler Type:</p> {post.traveler}
        </p>
        <button onClick={() => setPostEdit(post)}>Edit</button>
      </div>
    );
  };
  
  export default JournalFormCard;