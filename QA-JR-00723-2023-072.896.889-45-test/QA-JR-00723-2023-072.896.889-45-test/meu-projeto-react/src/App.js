import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TaskListPage from './pages/TaskListPage';
import TaskCreationPage from './pages/TaskCreationPage'
import TaskDetailsPage from './pages/TaskDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/tasks" component={TaskListPage} />
        <Route path="/task-creation" component={TaskCreationPage} />
        <Route path="/task-details" component={TaskDetailsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
