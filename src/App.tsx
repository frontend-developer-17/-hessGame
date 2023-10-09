import React from 'react';
import './/Scss/App.scss';
import BoardComponent from './Game/GameChess/GameComponent/BoardComponent';
import {  Route,  Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Autorisation from './Component/Autorisation/Autorisation';
import Register from './Component/Autorisation/Register';
import Auto from './Pages/Auto';
import Settings from './Pages/Settings';
import PrivateRouter from './helpers/PrivateRoute';
import BoardHahska from './Game/GameHahski/GameComponentHahska/BoardHahska';
import UpdateUser from './Component/Autorisation/UpdateProfile/UpdateUser';
import UpdatePassword from './Component/Autorisation/UpdateProfile/UpdatePassword';
import DeleteUser from './Component/Autorisation/UpdateProfile/DeleteUser';
function App() {
  return (
    <div className="App">
     
    
      <Routes>
      <Route path='auth/*' element={<Auto/>}>

        <Route path='login' element ={<Autorisation/>}/>
        <Route path='register' element ={<Register/>}/>
      </Route>
      
     

      <Route path='/' element={<Home/>}/>

      {/* <Route element={<PrivateRouter/>}> */}
        
        <Route path='/gameChess' element={<BoardComponent/>}/>
        <Route path='/gameHahska' element={<BoardHahska/>}/>
        <Route path='/settings' element={<Settings/>}/>
      
        {/* </Route> */}
      </Routes>

    </div>
  );
}

export default App;
