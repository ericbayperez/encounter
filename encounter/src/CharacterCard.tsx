import React from 'react';
import Character from "./Character";
import './CharacterCard.css';
import { Card } from '@material-ui/core';

export const CharacterCard = (props: {character: Character}) => {
    return (
        <Card style={{padding: '20px'}} >
            <div className="card">
                {props.character.name}
                {props.character.totalHealth}
            </div>
        </Card>
    )
}