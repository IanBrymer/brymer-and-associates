import React from 'react';
import Router from './router';
import DefaultNavbar from './components/navbar';
import Footer from './components/footer';



function App() {
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  return (
    <div>
      <div className='App'><DefaultNavbar></DefaultNavbar></div>
      <Router></Router>
      <div className='w-100'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
