import React, { useState } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import TabNav from '../src/Components/TabNav';
import AppRouter from '../src/AppRouter'

function App() {
  const [list, setList] = useState([...PostDetails])
  const[postEdit, setPostEdit] = useState(null);

  const editPost = post => {
    const editIndex = list.indexOf(postEdit);
    setList(list.map((submission, index) => (index === editIndex ? post : submission)))
  }

  return (
    <main>
   <Header />
   <TabNav />
   <AppRouter />
    
   
   
    {/* <JournalForm
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

      <NewAccount/> */}
  </main>
  );
 
}

export default App;
