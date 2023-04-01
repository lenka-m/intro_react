// importi

import TeamCard from "../Components/TeamCard"

function Teams({myTeams, setMyTeams}) {
  
  const pageNum = 1;
  
  return (
    <div className="pageContainer">
      <div className='CardsContainer'>
      {myTeams.map((team)=>(
        <TeamCard team={team} pageNum={pageNum} myTeams={myTeams} setMyTeams={setMyTeams} />
      ))}</div>
    </div>
  )
}

export default Teams