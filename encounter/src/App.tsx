import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Character from './Character';
import { CharacterCard } from './CharacterCard';
import CharacterInfo from './CharacterInfo';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Fab, Button, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSortAmountDown, faArrowCircleRight, faArrowRight, faHeart, faShieldAlt, faUser, faDiceD20, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faSortAmountDown, faArrowCircleRight, faArrowRight, faHeart, faShieldAlt, faUser, faDiceD20, faExclamationTriangle);

//WHEN YOU GET RID OF THIS, MAKE SURE YOU START THE STATE OUT WITH AN EMPTY CHARACTER
let sampleChars: Character[] = [
  {
    id: 1,
    name: "Nicole Perez",
    currentHealth: 18,
    totalHealth: 25,
    armorClass: 13,
    isPlayer: true,
    isSelected: true,
    isCurrentTurn: true,
    initiative: 3,
    isDisadvantaged: true
  },
  {
    id: 2,
    name: "Eric Perez",
    currentHealth: 13,
    totalHealth: 22,
    armorClass: 16,
    isPlayer: false,
    isSelected: false,
    isCurrentTurn: false,
    initiative: 5,
    isDisadvantaged: false
  }
]

interface AppState {
  characters: Character[];
  selectedCharacterIndex: number;
}

export default class App extends React.Component<{}, AppState>{

  constructor(props: any) {
    super(props);
    this.state = {
      characters: sampleChars,
      selectedCharacterIndex: 0
    };
  }

  onCharacterSelected = (key: number) => {
    let characters = [...this.state.characters];
    let character = {...characters[this.state.selectedCharacterIndex]};
    character.isSelected = false;
    characters[this.state.selectedCharacterIndex] = character;
    const selectedIndex = this.state.characters.findIndex(character => character.id === key);
    character = {...characters[selectedIndex]};
    character.isSelected = true;
    characters[selectedIndex] = character;
    this.setState({characters: characters, selectedCharacterIndex: selectedIndex});
  }

  onNameChange = (e: any) => {
    let previousCharacters = [...this.state.characters];
    let character = {...previousCharacters[this.state.selectedCharacterIndex]};
    character.name = e.target.value;
    previousCharacters[this.state.selectedCharacterIndex] = character;
    this.setState({characters: previousCharacters});
  }

  onCurrentHealthChange = (e: any) => {
    let previousCharacters = [...this.state.characters];
    let character = {...previousCharacters[this.state.selectedCharacterIndex]};
    character.currentHealth = e.target.value;
    previousCharacters[this.state.selectedCharacterIndex] = character;
    this.setState({characters: previousCharacters});
  }

  onTotalHealthChange = (e: any) => {
    let previousCharacters = [...this.state.characters];
    let character = {...previousCharacters[this.state.selectedCharacterIndex]};
    character.totalHealth = e.target.value;
    previousCharacters[this.state.selectedCharacterIndex] = character;
    this.setState({characters: previousCharacters});
  }

  onInitiativeChange = (e: any) => {
    let previousCharacters = [...this.state.characters];
    let character = {...previousCharacters[this.state.selectedCharacterIndex]};
    character.initiative = e.target.value;
    previousCharacters[this.state.selectedCharacterIndex] = character;
    this.setState({characters: previousCharacters});
  }

  onIsPlayerChange = (oldIsPlayerValue: boolean) => {
    let previousCharacters = [...this.state.characters];
    let character = {...previousCharacters[this.state.selectedCharacterIndex]};
    character.isPlayer = !oldIsPlayerValue;
    previousCharacters[this.state.selectedCharacterIndex] = character;
    this.setState({characters: previousCharacters});
  }

  onIsDisadvantagedChange = (oldIsDisadvantagedValue: boolean) => {
    let previousCharacters = [...this.state.characters];
    let character = {...previousCharacters[this.state.selectedCharacterIndex]};
    character.isDisadvantaged = !oldIsDisadvantagedValue;
    previousCharacters[this.state.selectedCharacterIndex] = character;
    this.setState({characters: previousCharacters});
  }

  onArmorClassChange = (e: any) => {
    let previousCharacters = [...this.state.characters];
    let character = {...previousCharacters[this.state.selectedCharacterIndex]};
    character.armorClass = e.target.value;
    previousCharacters[this.state.selectedCharacterIndex] = character;
    this.setState({characters: previousCharacters});
  }

  onNewCharacterClick = () => {
    let previousCharacters = [...this.state.characters];
    previousCharacters.push({
      id: previousCharacters.length + 1,
      name: "",
      currentHealth: 0,
      totalHealth: 0,
      armorClass: 0,
      isPlayer: false,
      isSelected: true,
      isCurrentTurn: false,
      initiative: 0,
      isDisadvantaged: false
    });
    previousCharacters[this.state.selectedCharacterIndex].isSelected = false;
    this.setState({characters: previousCharacters, selectedCharacterIndex: previousCharacters.length - 1});
  }

  orderByInitiative = () => {
    let previousCharacters = [...this.state.characters];
    previousCharacters[this.state.selectedCharacterIndex].isSelected = false;
    previousCharacters.sort((a,b) => b.initiative - a.initiative);
    previousCharacters[0].isSelected = true;
    var currentTurnIndex = previousCharacters.findIndex(character => character.isCurrentTurn === true);
    previousCharacters[currentTurnIndex].isCurrentTurn = false;
    previousCharacters[0].isCurrentTurn = true;
    this.setState({characters: previousCharacters, selectedCharacterIndex: 0});
  }

  moveToNextTurn = () => {
    let previousCharacters = [...this.state.characters];
    var currentTurnIndex = previousCharacters.findIndex(character => character.isCurrentTurn === true);
    previousCharacters[currentTurnIndex].isCurrentTurn = false;
    previousCharacters[this.state.selectedCharacterIndex].isSelected = false;
    currentTurnIndex++;
    if (currentTurnIndex === previousCharacters.length) {
      currentTurnIndex = 0;
    }
    previousCharacters[currentTurnIndex].isCurrentTurn = true;
    previousCharacters[currentTurnIndex].isSelected = true;
    this.setState({characters: previousCharacters, selectedCharacterIndex: currentTurnIndex});
  }

  render() {
    const selectedCharacter = this.state.characters[this.state.selectedCharacterIndex];
    return (
      <>
        <Grid container spacing={0}>
          <Grid item sm={5} xs={12} className="characterlist">
            <div style={{paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px"}}>
              {this.state.characters.map(character =>
                <div key={character.id} style={{marginBottom: "10px"}} onClick={() => this.onCharacterSelected(character.id)}>
                  <CharacterCard character={character}></CharacterCard>
                </div>
              )}
            </div>
            <Grid container spacing={2} direction="row" justify="center">
              <Grid item sm={3} md={2} direction="row">
                <div style={{display: "flex", justifyContent: "center"}}>
                  <Tooltip title="New Character">
                    <Fab color="primary" onClick={this.onNewCharacterClick}>
                      <FontAwesomeIcon icon="plus"></FontAwesomeIcon> 
                    </Fab>
                  </Tooltip>
                </div>
              </Grid>
              <Grid item sm={3} md={2} direction="row">
                <div style={{display: "flex", justifyContent: "center"}}>
                  <Tooltip title="Order By Initiative">
                    <Fab color="primary" onClick={this.orderByInitiative}>
                      <FontAwesomeIcon icon="sort-amount-down"></FontAwesomeIcon> 
                    </Fab>
                  </Tooltip>
                </div>
              </Grid>
              <Grid item sm={3} md={2} direction="row">
                <div style={{display: "flex", justifyContent: "center"}}>
                  <Tooltip title="Next Turn">
                    <Fab color="secondary" onClick={this.moveToNextTurn}>
                      <FontAwesomeIcon icon="arrow-right"></FontAwesomeIcon> 
                    </Fab>
                  </Tooltip>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={7} xs={12} >
            <div style={{padding: "20px"}}>
              <CharacterInfo character={selectedCharacter} 
                onNameChange={this.onNameChange}
                onTotalHealthChange={this.onTotalHealthChange}
                onInitiativeChange={this.onInitiativeChange}
                onIsPlayerChange={this.onIsPlayerChange}
                onCurrentHealthChange={this.onCurrentHealthChange}
                onArmorClassChange={this.onArmorClassChange}
                onIsDisadvantagedChange={this.onIsDisadvantagedChange}
              >
              </CharacterInfo>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
}
