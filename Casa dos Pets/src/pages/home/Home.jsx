import { useState } from 'react'

import { Link } from 'react-router-dom';



function Home() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='intro'>
          <h3>Treinamento Para <strong>Pets</strong></h3>
          <img className='img-cachorro' src="./src/assets/dog.svg" alt="" />
      </div>

    </>
  )
}

export default Home