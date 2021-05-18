

import React, { useState } from 'react';
import classes from "./App.module.css";
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
    const clearText = () => {
        setCurrentGuess("");
        setWrongAnswers(0);
    }
    return (
        <div className={classes.App}>
            <div className={"container my-3"}>
                <p>Hello World</p>
                <button className="btn btn-primary" onClick={clearText}>
                    Clear
                </button>
                <p>{wrongAnswers}</p>
            </div>
            <div className={classes.BottomPart}>
                <DashWord word={"Hello"} lettersToDisplay={currentGuess} />
                <LetterSection handleClick={handleClick} />
            </div>
        </div>
    );
}

export default App;
