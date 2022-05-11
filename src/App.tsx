import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Board} from './pages/IndicatorBoard/Board';
import {Login} from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/indicators' element={<Board/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;