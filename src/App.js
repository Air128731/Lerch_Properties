import { List } from '@mui/material';
import './App.css';
import Landing from './components/Landing';
import Listings from './components/Listings';
import Contactus from './components/Contactus'
import Faq from './components/Faq';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/listingproperty' element={<Listings />}></Route>
        <Route path='/contact' element={<Contactus />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
