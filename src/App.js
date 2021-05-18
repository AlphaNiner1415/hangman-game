import logo from "./logo.svg";
import classes from "./App.css";
import LetterSection from './components/LetterSection/LetterSection';

function App() {
    return (
        <div className={classes.App}>
            <div className={"container my-3"}>
                Hello World
            </div>
            <LetterSection />
        </div>
    );
}

export default App;
