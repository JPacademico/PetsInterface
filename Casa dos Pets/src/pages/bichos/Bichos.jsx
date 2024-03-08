import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';



function Bichos() {
  const [count, setCount] = useState(0)
  const [bicho, setBicho] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios('https://localhost:7083/api/Pets');
        setBicho(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    

    fetchData();
  }, []);

  return (
    <>

      <div className='intro'>
      <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>idade</th>
            </tr>
          </thead>
          <tbody>
            { bicho && bicho.map(dados =>  (
                <tr>
                  <td>{dados.nomePet}</td>
                  <td>{dados.tipo}</td>
                  <td>{dados.idade} anos</td>
                </tr>
              
            ))}
            
          </tbody>
        </table>

      </div>

    </>
  )
}

export default Bichos
