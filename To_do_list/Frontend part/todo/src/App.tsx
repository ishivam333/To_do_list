import React from 'react';
import NavigationBar from './Component/NavigationBar';
import Task from './Component/Task';
import ListCrud from './Component/ListCrud';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/todo_pro" component={Task} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/update-task/:id" component={ListCrud} />
        <Route exact path="/add-task" component={ListCrud} />
      </Switch>
    </>
  );
}

export default App;
