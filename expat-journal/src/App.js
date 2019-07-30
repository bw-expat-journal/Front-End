import React, { useState } from 'react';
import './App.css';
import Header from '../src/Components/Header';
import TabNav from '../src/Components/TabNav';
import AppRouter from '../src/AppRouter'

function App() {


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
