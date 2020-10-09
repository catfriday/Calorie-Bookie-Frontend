import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginSignUp from './LoginSignUp';
import Header from './Header';
import CreateProfileForm from './CreatProfileForm';


class App extends Component {
state = {
  currentUser: null
}

login = (e) => {
  e.preventDefault()
  console.log(e.target.value)
  fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: 'test2@gmail.com',
                password: 'password'
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            localStorage.token = userInfo.token
   
            localStorage.id = userInfo.id 
            localStorage.name = userInfo.name   
            console.log(userInfo)
        })
}

render(){
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/home' render={(routerProps) =>
           <LoginSignUp {...routerProps} login={this.login} currentUser={this.state.currentUser}/>} />

        <Route path='/create_profile' render={(routerProps) => 
            <CreateProfileForm {...routerProps} />} />
         
       

      </Switch>
    </BrowserRouter>
  );
   }
}

export default App;
