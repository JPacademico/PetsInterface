import { useState } from 'react'
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Home from './pages/home/Home'
import Tutores from './pages/tutores/Tutores';
import Bichos from './pages/bichos/Bichos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='mainbox'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path={'/tutores'} element={<Tutores/>}/>
          <Route path={'/bichos'} element={<Bichos/>}/>
        </Routes>
      </div>
      

    </>
  )
}

export default App
