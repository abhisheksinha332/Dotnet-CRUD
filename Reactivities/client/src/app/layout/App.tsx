import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import { Activity } from '../Models/activity';
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/Activity/Dashboard/ActivityDashboard';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)

  useEffect(()=>{

    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response =>{
      console.log(response)
      setActivities(response.data)
    })

  },[])


  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(x => x.id === id))
  }

  function handleCancelSelectedActivity(){
    setSelectedActivity(undefined)
  }

  function handleFormOpen(id?:string){
    id ? handleSelectActivity(id) : handleCancelSelectedActivity();
    setEditMode(true)
  }

  function handleFormClose(){
    setEditMode(false)
  }

  return (
    <Fragment>
        <Navbar openForm={handleFormOpen}/>
        <Container style={{marginTop:'7em'}}>
          <ActivityDashboard 
              activities={activities}
              selectedActivity = {selectedActivity}
              selectActivity = {handleSelectActivity}
              cancelSelectActivity = {handleCancelSelectedActivity}
              editMode={editMode}
              openForm ={handleFormOpen}
              closeForm = {handleFormClose}
              />
        </Container>
        
        
    </Fragment>
  );
}

export default App;
