import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/Models/activity';
import AcivityList from './ActivityList';
import ActivityDetails from '../Details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities : Activity[];
    selectedActivity :Activity | undefined;
    selectActivity: (id:string) => void;
    cancelSelectActivity: () => void
}

export default function({activities, selectedActivity, selectActivity, cancelSelectActivity}: Props){
    return(
        <Grid>
            <Grid.Column width={10}>
                <AcivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity &&
                <ActivityDetails activity={selectedActivity}  cancelSelectedActivity={cancelSelectActivity}/>}
                <ActivityForm />
            </Grid.Column>
        </Grid>
    )
}