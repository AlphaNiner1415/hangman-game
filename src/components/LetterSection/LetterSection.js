import classes from './LetterSection.module.css';
import Letter from '../Letters/Letter';
import React from 'react';
const LetterSection = ({ handleClick }) => {
    const firstRow = [{letter: 'A', disabled: false}, {letter: 'B', disabled: false}, {letter: 'C', disabled: false}, {letter: 'D', disabled: false}, {letter: 'E', disabled: false}, {letter: 'F', disabled: false}, {letter: 'G', disabled: false}, {letter: 'H', disabled: false}, {letter: 'I', disabled: false}, {letter: 'J', disabled: false}, {letter: 'K', disabled: false}, {letter: 'L', disabled: false}, {letter: 'M', disabled: false}];
    const secondRow = [{letter: 'N', disabled: false}, {letter: 'O', disabled: false}, {letter: 'P', disabled: false}, {letter: 'Q', disabled: false}, {letter: 'R', disabled: false}, {letter: 'S', disabled: false}, {letter: 'T', disabled: false}, {letter: 'U', disabled: false}, {letter: 'V', disabled: false}, {letter: 'W', disabled: false}, {letter: 'X', disabled: false}, {letter: 'Y', disabled: false}, {letter: 'Z', disabled: false}];
    return (
        <div className={`container rounded shadow p-2 `}>
            <div className={classes.LetterRow}>
                {firstRow.forEach((letter) => {
                    return <Letter letter={letter.letter} handleClick={handleClick} />;
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