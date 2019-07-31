import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'

import Login from './Components/Login';
import NewAccount from './Components/NewAccount';
import JournalForm from './Components/Journal/JournalForm';
import JournalFormCard from './Components/Journal/JournalFormCard';
import { PostDetails } from './Components/Journal/JournalData';
import { get } from 'https';

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
        console.log('post', res)
         setList(res.data.journals)
      })
      .catch(err => {
        console.log('ERR', err.response)
      })
    }
    getPost();

}, [])


const[postEdit, setPostEdit] = useState(null);
const editPost = post => {
const editIndex = list.indexOf(postEdit);
  setList(list.map((submission, index) => (index === editIndex ? post : submission)))
}
    return <div className="page-view-ui">
        <Switch>
            <Route 
              path='/' 
              render={(props) =>
              <div> 
              <JournalForm {...props} 
                list={list} 
                setList={setList}
                postEdit={postEdit}
                setPostEdit={setPostEdit}
                editPost={editPost}
              />
               {list.map((post, index) => {
               return(
               <JournalFormCard key={index} post={post} setPostEdit={setPostEdit} />
               );
              })};
              </div>}
            />
            <Route exact path='/sign-up' component={NewAccount}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </div>
}