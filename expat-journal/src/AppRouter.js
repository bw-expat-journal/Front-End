import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';

import Login from './Components/Login';
import NewAccount from './Components/NewAccount';
import JournalForm from './Components/Journal/JournalForm';
import JournalFormCard from './Components/Journal/JournalFormCard';
import { PostDetails } from './Components/Journal/JournalData';

const StyledContainer = styled.div`
  background: #C9E5EB;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;


export default function AppRouter() {
const [list, setList] = useState([])
useEffect (() => {
    const getPost = () => {
      axios({
        url:'https://expat-journals.herokuapp.com/api/v1/journals',
        method: 'get',
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then((res) => { 
         setList(res.data.journals.sort((a,b) => b.id - a.id));
      })
      .catch(err => {  
      })
    }
    getPost();

}, [])


const[postEdit, setPostEdit] = useState(null);
const editPost = post => {
  const editIndex = list.indexOf(postEdit);
  const id = list[editIndex].id
  axios({
    url:`https://expat-journals.herokuapp.com/api/v1/journals/${id}`,
    method: 'put',
    headers: {
      Authorization: localStorage.getItem('token')
    },
    data:{
      message: post.message,
      location: post.location
     }
  })
  .then((res) => {
    setList(list.map((submission, index) => (index === editIndex ? res.data.journal : submission)))
  })
  .catch(err => {
  })
}
const deletePost = id => {
  axios({
    url:`https://expat-journals.herokuapp.com/api/v1/journals/${id}`,
    method: 'delete',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
  .then((res) => {
    setList(list.filter(post => post.id !== id));
  })
  .catch(err => {
  })
}



    return <div className="page-view-ui">
        <Switch>
            <Route 
              exact path='/journals' 
              render={(props) =>
              <div> 
              <JournalForm {...props} 
                list={list} 
                setList={setList}
                postEdit={postEdit}
                setPostEdit={setPostEdit}
                editPost={editPost}
              />
              <StyledContainer>
               {list.map((post, index) => {
               return(
                 
               <JournalFormCard 
                key={index} 
                post={post} 
                setPostEdit={setPostEdit} 
                deletePost={deletePost}/>
               
               );
              })}
              </StyledContainer>
              </div>}
            />
            <Route path='/sign-up' component={NewAccount}/>

            <Route exact path='/' component={Login}/>
            <Route path='/home' component={() => window.location.href = 'https://expat-journal-ui.netlify.com/'}/>

            
        </Switch>
    </div>
}