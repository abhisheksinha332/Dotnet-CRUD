import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/Models/activity';

interface Props{
    activity: Activity | undefined;
    closeForm: () => void;
}

export default function ActivityForm({activity,closeForm}: Props){
    return(
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title' />
                <Form.Input placeholder='Description' />
                <Form.Input placeholder='Category' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content="Cancel" onClick={closeForm} /> 
            </Form>
        </Segment>
    )
}