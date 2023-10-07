import React from 'react';
import Router from './router';
import DefaultNavbar from './components/navbar';



function App() {
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  return (
    <div>
      <div className='App position-absolute end-0'><DefaultNavbar></DefaultNavbar></div>
      <Router></Router>
    </div>
  );
}

export default App;
