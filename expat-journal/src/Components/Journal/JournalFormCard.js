import React from 'react';
import styled from 'styled-components';

const JournalFormCard = ({ post, setPostEdit, deletePost }) => {
    return (
      <StyledCard>
        {post.image_url &&  <img src= {post.image_url} alt= ''/>}
        {post.message &&  <p className='message'>{post.message}</p>}
       <div className='post-footer'>
        <p className='location'>
        <img src='https://image.flaticon.com/icons/svg/149/149984.svg' alt='location'/>
        {post.location}</p> 
        <p className='caption'>{post.caption}</p>
        
        <button onClick={() => setPostEdit(post)}>Edit</button>

        <button onClick={() => deletePost(post.id)}>Delete</button>
</div>
      </StyledCard>
    );
  };
  
  export default JournalFormCard;

  const StyledCard = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  background: white;
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 2rem;
  text-align: center;
  border-radius: 8px;
  justify-content: center;
  align-self: flex-start;
  min-height: 500px;
  border: 1.8px solid #aacddf;

img{
  max-height: 500px;
  border-radius: 8px;
  object-fit: cover;
}

  p.location {
    font-size: 1.5rem; 
    text-align: center;
    font-family: 'Raleway', sans-serif;
    img {
      width: 1.3rem;
      padding-right: .5rem;
    }
  }

  p.caption {
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
    justify-content: center; 
  }

  p.message {
    margin: 2rem;
    font-size: 2.5rem;
    text-align: center;
    position: relative;
    font-family: 'Raleway', sans-serif;
  }

  .post-footer {
    margin: 1rem;
    align-self: stretch;
  }

  button {
      border-radius: 8px;
      border: none;
      color: white;
      padding: 15px 32px;
      margin: 15px;
      margin-top: 15px;
      background: #3C8C9E;
      font-size: 1rem;
  }
  `