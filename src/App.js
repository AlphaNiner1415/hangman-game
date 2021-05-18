
import classes from "./App.css";
import LetterSection from './components/LetterSection/LetterSection';
import DashWord from './components/DashWord/DashWord';

function App() {
    return (
        <div className={classes.App}>
            <div className={"container my-3"}>
                Hello World
            </div>
            <DashWord word={"Hello"} lettersToDisplay={"He"}/>
            <LetterSection />
        </div>
    );
}

export default App;
