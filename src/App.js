import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Naviagtion from './components/Naviagtion';
import About from './routes/About';
import Detail from './routes/Detail';
import Home from './routes/Home';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Naviagtion />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail' element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App