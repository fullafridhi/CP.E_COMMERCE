
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
    <Routes>
        <Route path ='/home'element={<Home/>}/>
        <Route path ='/login'element={<Login/>}/>
        <Route path ='/register'element={<Register/>}/>

    </Routes>
      </header>
    </div>
  );
}

export default App;
