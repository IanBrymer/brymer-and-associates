import React from 'react';
import Router from './router';
import DefaultNavbar from './components/navbar';
import Footer from './components/footer';



function App() {
  return (
    <>
      <div>
        <div className='body'></div>
        <Router></Router>
      </div>
      <div className='d-block'>

      </div>
    </>

  );
}

export default App;
