import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <Routes>
    <Route path='/' exact
    element={<SignIn/>}/>
    <Route path='/Signup'
    element={<Signup/>}/>
    </Routes>
  );
}

export default App;
