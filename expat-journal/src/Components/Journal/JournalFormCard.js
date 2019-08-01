import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: white;
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 2rem;
  text-align: center;

  p.location {
    font-size: 1.5rem; 
    text-align: center;
    img {
      width: 1.3rem;
      padding-right: .5rem;
    }
  }

  p.message {
    margin: 2rem;
    font-size: 4rem;
    text-align: center;
  }

  .post-footer {
    margin: 2rem;
  }

  button {
    text-align: center;
    padding: 1rem 2rem;
    border-radius:  15px;
    border: none;
    background: #3C8C9E;
    color: white;
  }

`
// const [list, setList] = useState([...PostDetails])
// const[postEdit, setPostEdit] = useState(null);

// const editPost = post => {
//   const editIndex = list.indexOf(postEdit);
//   setList(list.map((submission, index) => (index === editIndex ? post : submission)))
// }
const JournalFormCard = ({ post, setPostEdit }) => {
  console.log(post)
    return (
      <StyledCard>
        {
          post.image_url &&  <img src= {post.image_url} alt= ''/> 
        }
        {
          post.message &&  <p className='message'>{post.message}</p>
        }
       <div className='post-footer'>
        <p className='location'>
        <img src='https://image.flaticon.com/icons/svg/149/149984.svg' alt='location'/>
        {post.location}</p> 
        <p className='caption'>{post.caption}</p>
        
        <button onClick={() => setPostEdit(post)}>Edit</button>
        </div>

        {/* <button onClick={() => deletePost(list.id)} className="button muted-button"> */}
  {/* Delete
</button> */}
      

      </StyledCard>
    );
  };
  
  export default JournalFormCard;
