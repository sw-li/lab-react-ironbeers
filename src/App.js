
import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import OneBeerPage from './pages/OneBeerPage';
import RandomBeerPage from './pages/RandomBeerPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/all-beers' element={<AllBeersPage/>}> </Route>
        <Route path='/all-beers/:beerId' element={ <OneBeerPage/>}></Route>
        <Route path='/random-beer' element={ <RandomBeerPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
