import './App.css';
import Navbar from './components/Navbar'
import Item from "./components/Item";
import Summary from "./components/Summary";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Item/>
            <Summary/>

        </div>
    );
}

export default App;
