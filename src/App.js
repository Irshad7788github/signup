// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={ <Signup/>} />
        <Route path='/login' element={ <Login/>} />
     </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
