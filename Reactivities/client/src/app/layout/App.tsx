import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import { Activity } from '../Models/activity';
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(()=>{

    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response =>{
      console.log(response)
      setActivities(response.data)
    })

  },[])

  return (
    <Fragment>
        <Navbar />
        <Container style={{marginTop:'7em'}}>
          <List>
            {activities.map((activity) =>(
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))}

          </List>
        </Container>
        
        
    </Fragment>
  );
}

export default App;
