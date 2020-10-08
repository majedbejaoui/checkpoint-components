import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
import PhotoProfil from './component/profile/PhotoProfil';
import NavBar from './component/profile/NavBar';
import './App.css';


class App extends Component{
  render(){
    return(
      
      <div style={{border: '5px solid red', maxWidth:''}}>
        <NavBar/>
       <FullName/>
       <Address/>
       <PhotoProfil/>
       
       </div>
  
  );
  }
}

export default App;
