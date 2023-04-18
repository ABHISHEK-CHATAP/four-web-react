import React from 'react'
import {  Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import Abouts from './Pages/Abouts';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';





function App() {
  return (
    <>

    <Routes>
        <Route index  exact element={<Home/>} />
        <Route exact path='/service' element={<Services/>} />
        <Route exact path='/about' element={<Abouts/>} />
        <Route exact path='/contact' element={<Contacts/>} />
       
    </Routes>
  
   
    </>
  );
}

export default App;
