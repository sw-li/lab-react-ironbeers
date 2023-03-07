
import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/all-beers' element={<AllBeersPage/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
