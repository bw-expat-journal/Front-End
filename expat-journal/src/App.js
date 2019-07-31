import React, { useState } from 'react';
import './App.scss';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import AppRouter from '../src/AppRouter'

function App() {
  return (
   <main>
     <Header />
     <AppRouter />
     <Footer />
   </main>
  );
 
}

export default App;