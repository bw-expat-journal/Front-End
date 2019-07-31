import React from 'react';

const JournalFormCard = ({ user, setPostEdit }) => {
    return (
      <div className = "user-story-container">
        <h2>Check out recent submissions from our users:</h2>
        <h2>Location: {user.location}</h2> 
        <h2>Traveler Type: {user.traveler}</h2> 
        <h2>Post: {user.submission}</h2> 
        <button onClick={() => setPostEdit(user)}>Edit</button>
      </div>
    );
  };
  
  export default JournalFormCard;

  // const [list, setList] = useState([...PostDetails])
  // const[postEdit, setPostEdit] = useState(null);

  // const editPost = post => {
  //   const editIndex = list.indexOf(postEdit);
  //   setList(list.map((submission, index) => (index === editIndex ? post : submission)))
  // }