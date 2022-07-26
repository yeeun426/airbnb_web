import { Routes, Route } from 'react-router-dom';
import React from "react";
import './App.css'

import Main from './pages/Main';
import Behost from './pages/Behost';
import Detail from './pages/Detail';
import Search from './pages/search'

function App() {

  return (
    <div className="App">
    <Routes>
        <Route exact path='/*' element={<Main/>}></Route>
        <Route path='behost' element={<Behost/>}></Route>
        <Route path='detail' element={<Detail/>}></Route>
        <Route path='search' element={<Search/>}></Route>
    </Routes>    
    </div>
  );
}

export default App;
