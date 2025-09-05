import { useState } from 'react';
import './App.css';
import GameResult from './GameResults';
const secretNum = Math.floor(Math.random () * 10) +1;

function Game() {
    const [ term, setTerm] = useState("")
    
    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    
    
    return(
        <div className="container">
           <div className='head'>
            <label htmlFor='term'>
                Guess the number between 1 to 10
            </label>

          </div> 
          <input
               id='term' // term indicates label
               type='text'
               name='term' //indicate values in input box
               onChange={handleChange}
          />
          <GameResult secretNum={secretNum} term={term} />


        </div>
    );
}

export default Game;
