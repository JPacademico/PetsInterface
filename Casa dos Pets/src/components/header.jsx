import { useState } from 'react'
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='logo'>
          <img className='img-casa' src="./src/assets/casa.svg" alt="" />
          <h2>Pets</h2>
        </div>
        <div className='options'>
          <Link className='opcoes' to="/Tutores">Tutores</Link>
          <Link className='opcoes' to="/Bichos">Bichos</Link>
        </div>        
      </header>
    </>
  )
}

export default Header
