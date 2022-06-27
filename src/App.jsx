import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Tour} from './pages/Tour'
 const  App = () =>{
  
  return ( 
   <Router>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/tour/:id" element={<Tour/>}/>
    </Routes>
   </Router>
  )

}

export default App;
