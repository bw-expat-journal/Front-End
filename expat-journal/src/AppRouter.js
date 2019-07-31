import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import NewAccount from './Components/NewAccount';
import JournalForm from './Components/Journal/JournalForm';


export default function AppRouter() {
    return <div className="page-view-ui">
        <Switch>
            <Route path='/' exact component={NewAccount}/>
            <Route Path='/login' component={Login}/>
            <Route path='/submit' component={JournalForm}/>
        </Switch>
    </div>
}