import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import './Tutores.css'


function Tutores() {
  const [count, setCount] = useState()
  const [tutor, setTutor] = useState()



  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios('https://localhost:7083/api/Tutors');
        setTutor(response.data);
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
              <th>CPF</th>
              <th>Bichos</th>
            </tr>
          </thead>
          <tbody>
            { tutor && tutor.map(dados =>  (
                <tr>
                  <td>{dados.nomeTutor}</td>
                  <td>{dados.cpf}</td>
                  <td>Mamíferos</td>
                </tr>
              
            ))}
            
          </tbody>
        </table>
        
          
      </div>

    </>
  )
}

export default Tutores
