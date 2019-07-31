import React from 'react';

// const [list, setList] = useState([...PostDetails])
// const[postEdit, setPostEdit] = useState(null);

// const editPost = post => {
//   const editIndex = list.indexOf(postEdit);
//   setList(list.map((submission, index) => (index === editIndex ? post : submission)))
// }
const JournalFormCard = ({ post, setPostEdit }) => {
  console.log(post)
    return (
      <div className = "user-story-container">
      <h2>Check out recent submissions from our users:</h2>
        <h2>Location: {post.location}</h2> 
        <h2>Traveler Type: {post.traveler}</h2> 
       <h2>Post: {post.submission}</h2>
       <img src= {post.image_url} alt= ''/> 
        <button onClick={() => setPostEdit(post)}>Edit</button>
      </div>
    );
  };
  
  export default JournalFormCard;
