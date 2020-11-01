import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import LoginPage from './pages/LoginPage';
import NewProjectPage from './pages/NewProjectPage';
import NewPledgePage from './pages/NewPledgePage';
import UpdateProjectPage from './pages/UpdateProjectPage';
import DeleteProjectPage from './pages/DeleteProjectPage';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/project/create">
            <NewProjectPage />
          </Route>

          <Route path="/project/update">
            <UpdateProjectPage />
          </Route>

          <Route path="/project/delete">
            <DeleteProjectPage />
          </Route>

          <Route path="/pledge/create">
            <NewPledgePage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  )
}

export default App;