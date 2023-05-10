import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './styles/index.css';
import Navbar from "./components/Navbar";
import Dashboard from './pages/Dashboard'
import Transactions from "./pages/Transactions";
import Login from "./pages/Login";


function App() {
    const LoginContainer = () => (
        <div className="App">
           <Routes>
               <Route exact path="/" render={() => <Navigate to="/login"/>}/>
               <Route path="/login" component={Login}/>
           </Routes>
        </div>
    );

    const DefaultContainer = () => (
        <div className="App">
            <Navbar/>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/transactions' element={<Transactions/>}></Route>
        </div>
    );

    return (
        <Router>
            <Routes>
                <Route path={"/(login)"} element={<LoginContainer/>}></Route>
                <Route path={"/:something"} element={<DefaultContainer/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
