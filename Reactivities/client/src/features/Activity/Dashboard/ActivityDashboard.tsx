import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/Models/activity';
import AcivityList from './ActivityList';

interface Props {
    activities : Activity[]
}

export default function({activities}: Props){
    return(
        <Grid>
            <Grid.Column width={10}>
                <AcivityList activities={activities}/>
            </Grid.Column>
        </Grid>
    )
}