import React from 'react';
import Character from "./Character";
import './CharacterCard.css';
import { Grid } from '@material-ui/core';

export const CharacterCard = (props: {character: Character, selected: boolean}) => {
    return (
        <div className={props.character.isSelected ? "cardSelected" : "card"}>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    {props.character.name}
                </Grid>
                <Grid item xs={4}>
                    {props.character.currentHealth + '/' + props.character.totalHealth}
                </Grid>
                <Grid item xs={1}>
                    {props.character.armorClass}
                </Grid>
            </Grid>
        </div>    
    )
}