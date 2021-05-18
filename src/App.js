
import classes from "./App.css";
import React, { useState } from 'react';
import LetterSection from './components/LetterSection/LetterSection';
import DashWord from './components/DashWord/DashWord';

function App() {
    const [ currentGuess, setCurrentGuess ] = useState("");
    const [ wrongAnswers, setWrongAnswers ] = useState(0);
    const [ word, setWord ] = useState("Hello");
    const handleClick = (letter) => {
        console.log("Letter "+ letter+ " was clicked!");
        if(word.toUpperCase().includes(letter)){
            setCurrentGuess((prevGuess) => {
                console.log(letter)
                console.log(prevGuess)
                return (prevGuess + letter)
            });
        } else {
            setWrongAnswers(prevNum => prevNum + 1);
        }
    }
    return (
        <div className={classes.App}>
            <div className={"container my-3"}>
                <p>Hello World</p>

                {wrongAnswers}
            </div>
            <div></div>
            <DashWord word={"Hello"} lettersToDisplay={currentGuess} />
            <LetterSection handleClick={handleClick} />
        </div>
    );
}

export default App;
