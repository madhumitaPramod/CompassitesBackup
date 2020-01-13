import React,{Component} from 'react';
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import EmployeeListPage from './components/EmployeeListPage';

function App() {
  return (
    <div className="App">
      <div class="main_block">
      <BrowserRouter>
      <div>
        <Route
                exact
                path="/"
                component={Login}
              />
               <Route
                exact
                path="/EmployeeListPage"
                component={EmployeeListPage}
              />
              </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
