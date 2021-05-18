import classes from './DashWord.module.css';
import React from 'react';
const DashWord = ({ word, lettersToDisplay }) => {
    const wordArray = word.split("");
    const displayArray = lettersToDisplay.split("");
    console.log(displayArray);
    return(
        <div className="container">
            {wordArray.map((letter) => {
                if(displayArray.indexOf(letter) === -1) {
                    console.log("Went into if!!")
                    return <span className={classes.Dash}>A</span>;
                }
                return (
                    <span className={`${classes.Dash} ${classes.DashWithWord}`}>
                        {letter}
                    </span>
                );
                
            })}
        </div>
    )
};
export default DashWord;