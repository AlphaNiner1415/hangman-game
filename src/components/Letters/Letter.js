import classes from './Letter.module.css';
import React from 'react';
const Letter = ({ letter, handleClick, disabled }) =>{
    return(
        <button onClick={() => handleClick(letter)} className={`btn btn-primary ${classes.LetterButton}`} disabled={disabled}>{letter}</button>
    )
};
export default Letter;