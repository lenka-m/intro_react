import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Homepage from './Pages/Homepage';
import Teams from './Pages/Teams';
import { useState } from 'react';

function App() {
  const [myTeas, setMyTeams] = useState([]);
  
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <div className='content'>
          <Routes>
            <Route 
              path='/'
              element={<Homepage/>}/>
            <Route 
              path='/teams' 
              element={<Teams/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
