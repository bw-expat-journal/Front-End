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
   </main>
  );
 
}

export default App;
