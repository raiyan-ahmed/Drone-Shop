import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import Question1 from "./component/Question1/Question1";
import Question2 from "./component/Question2/Question2";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Shop></Shop>
        </div>
    );
}

export default App;
