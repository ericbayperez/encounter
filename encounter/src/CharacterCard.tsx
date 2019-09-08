import React from 'react';
import Character from "./Character";
import './CharacterCard.css';
import { Grid, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CharacterCard = (props: {character: Character}) => {
    return (
        <Grid container>
            <Grid item xs={1} direction="row" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                {props.character.isCurrentTurn && 
                    <Tooltip title="Current Turn">
                        <div>
                            <FontAwesomeIcon size="2x" color="#f50057" icon="dice-d20"></FontAwesomeIcon>
                        </div>
                    </Tooltip>
                } 
            </Grid>
            <Grid item xs={11}>
                <div className={props.character.isSelected ? "cardSelected" : "card"}> 
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={12} md={6}>
                            <div className="name-label">
                                {props.character.isPlayer &&
                                    <FontAwesomeIcon icon="user" color="blue" style={{marginRight: "10px"}}/>
                                }
                                {props.character.name}
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={12} md={6}>
                            <Grid container justify="space-between">
                                <Grid item xs={1}>
                                    <FontAwesomeIcon icon="heart" color="red"/>
                                </Grid>
                                <Grid item xs={5}>
                                    {props.character.currentHealth + '/' + props.character.totalHealth}
                                </Grid>
                                <Grid item xs={1}>
                                    <FontAwesomeIcon icon="shield-alt" color="green"/>
                                </Grid>
                                <Grid item xs={2}>
                                    {props.character.armorClass}
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={1}>
                                    {props.character.isDisadvantaged &&
                                        <Tooltip title="Disadvantaged">
                                            <div>
                                                <FontAwesomeIcon icon="exclamation-triangle" color="#FFC107"/>
                                            </div>
                                        </Tooltip>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </div>
            </Grid>
        </Grid>

    )
}