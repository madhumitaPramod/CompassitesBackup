import React, { Component } from 'react';
import { NavLink, Redirect } from "react-router-dom";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            fields:{},
            errors:{},
            RedirectPage:false
        }
    }
    
    handleChange = (e)=>{
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
        console.log("fields",fields);
    }
    submitLoginForm = (e) =>{
        e.preventDefault();
        if (this.validateLogin()) {
            let fields = {};
            fields["username"] = "hruday@gmail.com";
            fields["password"] = "hruday123";
            this.setState({fields:fields,RedirectPage:true});
            
            alert("Login SuccessFull!!");
            
        }
        else{
            alert("Login Failed!!");
        }
      }

      validateLogin() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  

        //username
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
          }
    
          if (typeof fields["username"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["username"])) {
              formIsValid = false;
              errors["username"] = "*Please enter valid username";
            }
          }
  //password
    if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.*\d)(?=.*[a-z]).{6,}.*$/)) {
            formIsValid = false;   
            errors["password"] = "*Please enter proper password";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }

    render() {
      const {RedirectPage} = this.state;

      if(RedirectPage){
        return <Redirect to="/EmployeeListPage" />;
      }
        return (
            <div>
               <div class="LoginBlock">
                  <h2>Login Page</h2>
                 <form method="post"  name="loginForm"  onSubmit= {this.submitLoginForm} >
                 <label>Username:</label>
                    <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}  />
                    <div className="errorMsg">{this.state.errors.username}</div>
                        <br />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                        <br />
                    <div className="errorMsg">{this.state.errors.password}</div>
                    <input type="submit" className="button"  value="Login"/>
                        
                </form>
                </div> 
            </div>
        )
    }
}
