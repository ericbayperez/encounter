import Character from "./Character";
import { TextField, Grid, Switch, FormControlLabel, Checkbox } from "@material-ui/core";
import React from "react";
import './CharacterInfo.css'

interface CharacterInfoProps {
    character: Character;
    onNameChange: any;
    onTotalHealthChange: any;
    onInitiativeChange: any;
    onIsPlayerChange: any;
    onCurrentHealthChange: any;
    onArmorClassChange: any;
    onIsDisadvantagedChange: any;
}

export default class CharacterInfo extends React.Component<CharacterInfoProps, {}>{
    render() {
        return (
            <>
                <Grid container className="row">
                    <Grid item xs={2}>
                        <b>Info</b>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Name" variant="outlined" value={this.props.character.name} onChange={this.props.onNameChange}></TextField>    
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Switch checked={this.props.character.isPlayer} onChange={() => this.props.onIsPlayerChange(this.props.character.isPlayer)} color="primary"/>
                            }
                            label="Player" />
                    </Grid>
                </Grid>
                <Grid container className="row">
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Initiative" type="number" variant="outlined" value={this.props.character.initiative} onChange={this.props.onInitiativeChange}></TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Armor Class" type="number" variant="outlined" value={this.props.character.armorClass} onChange={this.props.onArmorClassChange}></TextField>
                    </Grid>
                </Grid>
                <Grid container className="row">
                    <Grid item xs={2}>
                        <b>Health</b>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Current" type="number" variant="outlined" value={this.props.character.currentHealth} onChange={this.props.onCurrentHealthChange}></TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Total" type="number" variant="outlined" value={this.props.character.totalHealth} onChange={this.props.onTotalHealthChange}></TextField>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} alignContent="center">
                        <b>Status</b>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControlLabel 
                            label="Disadvantaged" 
                            control={
                                <Checkbox color="primary" checked={this.props.character.isDisadvantaged} onChange={() => this.props.onIsDisadvantagedChange(this.props.character.isDisadvantaged)}/>
                            }
                        />
                    </Grid>
                </Grid>
            </>
        )
    }

}