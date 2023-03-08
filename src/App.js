
import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import OneBeerPage from './pages/OneBeerPage';
import RandomBeerPage from './pages/RandomBeerPage'
import NewBeerPage from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/beers' element={<AllBeersPage/>}> </Route>
        <Route path='/all-beers/:beerId' element={ <OneBeerPage/>}></Route>
        <Route path='/random-beer' element={ <RandomBeerPage/>}></Route>
        <Route path='/new-beer' element={ <NewBeerPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
