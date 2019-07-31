import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import NewAccount from './Components/NewAccount';
import JournalForm from './Components/Journal/JournalForm';
import JournalFormCard from './Components/Journal/JournalFormCard';
import { PostDetails } from './Components/Journal/JournalData';

export default function AppRouter() {
    const [list, setList] = useState([...PostDetails])
const[postEdit, setPostEdit] = useState(null);
const editPost = post => {
  const editIndex = list.indexOf(postEdit);
  setList(list.map((submission, index) => (index === editIndex ? post : submission)))
}
    return <div className="page-view-ui">
        <Switch>
            <Route exact path='/' component={NewAccount}/>
            <Route path='/login' component={Login}/>
            <Route 
              path='/submit' 
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
        </Switch>
    </div>
}
