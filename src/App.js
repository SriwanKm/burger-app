import './App.css';
import Navbar from './components/Navbar'
import Item from "./components/Item";
import Summary from "./components/Summary";
import OrderList from "./components/OrderList";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Item/>
            <Summary/>
            <OrderList/>
        </div>
    );
}

export default App;
