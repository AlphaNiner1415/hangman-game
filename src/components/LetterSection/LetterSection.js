import classes from './LetterSection.module.css';
import Letter from '../Letters/Letter';
import React from 'react';
const LetterSection = ({ handleClick }) => {
    const firstRow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const secondRow = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return (
        <div className={`container rounded shadow p-2 `}>
            <div className={classes.LetterRow}>
                {firstRow.map((letter) => {
                    return <Letter letter={letter} handleClick={handleClick} />;
                })}
            </div>
            <div className={classes.LetterRow}>
                {secondRow.map((letter) => {
                    return <Letter letter={letter} handleClick={handleClick} />;
                })}
            </div>
        </div>
    );
};
export default LetterSection;