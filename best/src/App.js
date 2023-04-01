import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Homepage from './Pages/Homepage';
import Teams from './Pages/Teams';
import { useEffect, useState } from 'react';

function App() {
  const [teams, setTeams] = useState([]);
  const [myTeams, setMyTeams] = useState([]);

  async function getTeams(){
    const res = await fetch('http://localhost:3031/teams');
    const data = await res.json();
    setTeams(data);
  }

  useEffect(() => {
    getTeams();
  }, []);
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <div className='content'>
          <Routes>
            <Route 
              path='/'
              element={<Homepage teams = {teams} myTeams = {myTeams} setMyTeams={setMyTeams}/>}/>
            <Route 
              path='/teams' 
              element={<Teams  myTeams = {myTeams} setMyTeams={setMyTeams}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
