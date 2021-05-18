import classes from './Letter.module.css';
import React from 'react';
const Letter = ({ letter, handleClick }) =>{
    return(
        <button onClick={() => handleClick(letter)} className={`btn btn-primary ${classes.LetterButton}`}>{letter}</button>
    )
};
export default Letter;