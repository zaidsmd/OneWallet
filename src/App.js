import {BrowserRouter as Router ,Route ,Routes} from "react-router-dom";
import './styles/index.css';
import Navbar from "./components/Navbar";
import Dashboard from './pages/Dashboard'
import Transactions from "./pages/Transactions";


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>} ></Route>
                    <Route path='/transactions' element={<Transactions/>} ></Route>
                </Routes>
            </Router>
        </div>

    );
}

export default App;
