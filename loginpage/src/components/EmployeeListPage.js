import React, { Component } from 'react'
import { NavLink, Redirect } from "react-router-dom";
export default class EmployeeListPage extends Component {
    render() {
        return (
            <div>
                <center>
                <h2>This is EmployeeList Page</h2>
                <NavLink to="/" className="Login">
              Back            
              </NavLink>
            </center>
            </div>
        )
    }
}
