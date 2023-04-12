import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/Models/activity';
import AcivityList from './ActivityList';
import ActivityDetails from '../Details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities : Activity[];
    selectedActivity :Activity | undefined;
    selectActivity: (id:string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm :(id:string)=> void;
    closeForm : () => void
}

export default function({activities, selectedActivity, selectActivity, cancelSelectActivity, 
    editMode, openForm, closeForm }: Props){
    return(
        <Grid>
            <Grid.Column width={10}>
                <AcivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                <ActivityDetails activity={selectedActivity}  cancelSelectedActivity={cancelSelectActivity} openForm={openForm}/>}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity}/>}
            </Grid.Column>
        </Grid>
    )
}