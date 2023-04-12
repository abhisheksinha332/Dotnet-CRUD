import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import { Activity } from '../Models/activity';
import Navbar from './Navbar';

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
    <div className="App">
        <Navbar />
        
        <List>
          {activities.map((activity) =>(
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}

        </List>
        
    </div>
  );
}

export default App;
