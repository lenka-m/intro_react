import {useEffect, useState} from 'react'

function Homepage() {
  const [teams, setTeams] = useState(null);
  
  async function getTeams(){
    const res = await fetch('http://localhost:3031/teams');
    const data = await res.json();
    setTeams(data);
    console.log(data);
  }
  //Prikupljanje podataka
  useEffect(()=>{
    
    getTeams();
  },[])

  return (
    <div className="pageContainer">
      {teams!=null ? (
        <p>{teams[0].id}</p>
      ):(<div>nema</div>)}
    </div>
  )
}

export default Homepage