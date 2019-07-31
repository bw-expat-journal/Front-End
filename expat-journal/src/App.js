import React, { useState } from 'react';
import './App.scss';
import Header from '../src/Components/Header';
import TabNav from '../src/Components/TabNav';
import AppRouter from '../src/AppRouter'

function App() {


  return (
    <main>
   <Header />
   <TabNav />
   <AppRouter />
  </main>
  );
 
}

export default App;