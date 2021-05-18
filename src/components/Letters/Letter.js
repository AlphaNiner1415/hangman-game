import classes from './Letter.module.css';
import React from 'react';
const Letter = ({ letter, handleClick }) =>{
    const [ disabled, setDisabled ] = React.useState(false);
    const intermediateHandleClick = (letter) => {
        setDisabled(true);
        handleClick(letter)
    }
    return(
        <button onClick={() => intermediateHandleClick(letter)} className={`btn btn-primary ${classes.LetterButton}`} disabled={disabled}>{letter}</button>
    )
};
export default Letter;