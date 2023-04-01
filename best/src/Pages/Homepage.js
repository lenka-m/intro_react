import {useEffect, useState} from 'react'
import TeamCard from '../Components/TeamCard';



function Homepage({teams, myTeams, setMyTeams}) {
  const pageNum  = 0;
  return (
    <div className="pageContainer">
      {teams.length === 0 ? (
        <div> nema </div>
      ) : (
        <div className='CardsContainer'>
          
          {teams.map((team) => (
            <TeamCard key={team.id} pageNum = {pageNum} myTeams={myTeams} team ={team} setMyTeams={setMyTeams}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
