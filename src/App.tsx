import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Characters/>}/>
      <Route path='/characters/:id' element={<CharacterDetails/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
