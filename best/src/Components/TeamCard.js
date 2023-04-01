import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function TeamCard({team, myTeams, setMyTeams, pageNum}) {
  

  function addTeam(){
    if(!myTeams.includes()){
      setMyTeams([...myTeams, team]);
    } else console.log('tu je');
  }

  function removeTeam(){
    if(myTeams.includes(team)){
      setMyTeams(myTeams.filter(t => t !== team));
    }
  }

  return (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{textAlign:'center'}} component="div">
              {team.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {team.description}
            </Typography>
          </CardContent>
          {pageNum===0 && <CardActions>
            {(myTeams.includes(team))? (
              <Button onClick={removeTeam} size="small" sx={{color:'red'}}>Izbaci</Button>
            ):(
            <Button onClick={addTeam} size="small" sx={{color:'green'}}>Dodaj</Button>)}
            
          </CardActions>}
          
        </Card>
      
  )
}

export default TeamCard