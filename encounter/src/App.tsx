import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Character from './Character';
import { CharacterCard } from './CharacterCard';


let characters: Character[] = [
  {
    name: "Nicole Perez",
    currentHealth: 18,
    totalHealth: 25,
    armorClass: 13,
    type: 1
  },
  {
    name: "Eric Perez",
    currentHealth: 13,
    totalHealth: 22,
    armorClass: 16,
    type: 1
  }
]

export default class App extends React.Component {
  render() {
    return (
      <>
        <Grid container spacing={0}>
          <Grid item xs={4} style={{backgroundColor: '#f5f5f5', height:'100vh'}}>
            <div style={{padding: "5px"}}>
              {characters.map(character =>
                <div style={{marginBottom: "5px"}}>
                  <CharacterCard selected={false} character={character}></CharacterCard>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
}
