import React, { useState } from 'react';
import './App.css';
import NewAccount from './Components/NewAccount'

import Login from "../src/Components/Login"

import JournalForm from './Components/Journal/JournalForm';
import JournalFormCard from './Components/Journal/JournalFormCard';
import { PostDetails } from './Components/Journal/JournalData'

function App() {
  const [list, setList] = useState([...PostDetails])
  const[postEdit, setPostEdit] = useState(null);

  const editPost = post => {
    const editIndex = list.indexOf(postEdit);
    setList(list.map((submission, index) => (index === editIndex ? post : submission)))
  }

  return (
    <div>
    <JournalForm
      list={list}
      setList={setList}
      postEdit={postEdit}
      setPostEdit={setPostEdit}
      editPost={editPost}
    />
    {list.map((post, index) => {
      <JournalFormCard key={index} post={post} setPostEdit={setPostEdit} />
    })}
     <header className="App-header">
      <Login />


      </header>

      <NewAccount/>
  </div>
  );
 
}

export default App;
