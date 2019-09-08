import Character from "./Character";
import { TextField, Grid, Switch, FormControlLabel } from "@material-ui/core";
import React from "react";
import './CharacterInfo.css'

interface CharacterInfoProps {
    character: Character;
    onNameChange: any;
    onTotalHealthChange: any;
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
                                <Switch checked={this.props.character.isPlayer} color="primary"/>
                            }
                            label="Player" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} alignContent="center">
                        <b>Health</b>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Current" type="number" variant="outlined" value={this.props.character.totalHealth} onChange={this.props.onTotalHealthChange}></TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Total" type="number" variant="outlined" value={this.props.character.currentHealth}></TextField>
                    </Grid>
                </Grid>
            </>
        )
    }

}