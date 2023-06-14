import './App.css';
import Landing from './components/Landing';
import Detailed from './components/Detailed'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/detailed' element={<Detailed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
