import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginSignUp from './LoginSignUp';
import Header from './Header';
import CreateProfileForm from './CreatProfileForm';
import GoalForm from './GoalForm';
import MyDash from './MyDash';
import MyFoodLog from './MyFoodLog';
import NewNav from './NewNav';
import FoodSearchBar from './FoodSearchBar';
import FoodItem from './FoodItem';
import FoodList from './FoodList';
import MyProfile from './MyProfile';


class App extends Component {
state = {
  currentUser: {},
  loggedIn: false,
  dailyLogs: [],
  dailyCalories: null
  
}

acceptGoal = (lbGoal) => {
    
  fetch(`http://localhost:3000/api/v1/users/${this.state.currentUser.id}`, {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
          Authorization:  `Bearer ${localStorage.token}`
  },
      body: JSON.stringify({
          calories:lbGoal
  })
})
  .then(resp => resp.json())
  .then(user => {    
      console.log(user.calories)
      this.setState({
        dailyCalories: user.calories
      })
     
  })
}



login = (e) => {
  e.preventDefault()

  fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        })
        .then(res => res.json())
        .then(userInfo => {
        
          console.log(userInfo)
            localStorage.token = userInfo.token
            localStorage.id = userInfo.id 
            localStorage.name = userInfo.name
            localStorage.email = userInfo.email
            localStorage.weight = userInfo.weight
            localStorage.bank = userInfo.bank
            localStorage.image = userInfo.image
            localStorage.city = userInfo.city
            localStorage.loggedIn = true
            localStorage.calories = userInfo.calories
             userInfo.daily_logs = userInfo.daily_logs 
             localStorage.monthly_progress = userInfo.monthly_progress
             
            // localStorage.user = userInfo
            this.setState({
              currentUser: userInfo,
              loggedIn:true,
              dailyLogs: userInfo.daily_logs,
              dailyCalories: userInfo.calories
            })  
        })
}

createProfile = (e) => {
  e.preventDefault()
  // console.log(e.target.name.value)
  fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              user:{

                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                weight: e.target.weight.value,
                bank: e.target.bank.value,
                image: e.target.image.value,
                city: e.target.city.value
              }
            })
        })
        .then(res => res.json())
        .then(userInfo => {
          localStorage.token = userInfo.token
          localStorage.id = userInfo.id 
          localStorage.name = userInfo.name
          localStorage.email = userInfo.email
          localStorage.weight = userInfo.weight
          localStorage.bank = userInfo.bank
          localStorage.image = userInfo.image
          localStorage.city = userInfo.city
          localStorage.loggedIn = true 
        
          // userInfo.daily_logs
          // localStorage.user = userInfo
          this.setState({
            currentUser: userInfo.user,
            currentUser: localStorage,
            loggedIn:true 
          })  
          console.log(userInfo)
        })
}

logout = () =>{
  localStorage.clear()
  this.setState({
    loggedIn: false
  })
  console.log(localStorage)
}

createlogs =() => {
console.log(this.state.currentUser)

fetch('http://localhost:3000/api/v1/create_thirty', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
                Authorization:  `Bearer ${localStorage.token}`
        },
            body: JSON.stringify({
                id: this.state.currentUser.id
        })
    })
        .then(resp => resp.json())
        .then(logs => {
           this.setState({
             dailyLogs:logs
             
           })
            console.log(logs)
        })
}


render(){
  return (
    <BrowserRouter>
      <div className='app'>
      <Header />
      {/* this.state.currentUser.token */}
      {this.state.loggedIn ? 
          <Fragment>
            <NewNav logout={this.logout}/>
            <br></br><br></br>
            {this.state.dailyLogs.length === 0 ? <button onClick={this.createlogs}>Create Daily 30 Log</button>
            : null}
          </Fragment>
          
           : null } 
      

      <Switch>
        <Route path='/home' render={(routerProps) =>
           <LoginSignUp {...routerProps} 
              login={this.login} 
              currentUser={this.state.currentUser}/>} />
    
        <Route path='/create_profile' render={(routerProps) => 
            <CreateProfileForm {...routerProps} createProfile={this.createProfile}/>} />

        <Route path='/goals_form' render={(routerProps) =>
          <GoalForm {...routerProps} currentUser={this.state.currentUser} acceptGoal={this.acceptGoal}/>} /> 

        <Route path='/my_dash' render={(routerProps) =>
          <MyDash {...routerProps} currentUser={this.state.currentUser} dailyCalories={this.state.dailyCalories}/> }/>
        
        <Route exact path='/my_food_log' render={(routerProps) =>
          <MyFoodLog {...routerProps} currentUser={this.state.currentUser} logsArray={this.state.dailyLogs}/>} />
       
       <Route path='/my_profile' render={(routerProps) => 
        <MyProfile {...routerProps} currentUser={this.state.currentUser} />} />

        {/* <Route path='/my_food_log/:day_number' render={(routerProps) =>
          <FoodSearchBar {...routerProps} /> }/>

        <Route path='/food_item' render={(routerProps) =>
          <FoodItem {...routerProps}/> } />

         <Route path='/food_brand' render={(routerProps) =>
         <FoodList {...routerProps}/>}/>  */}

      </Switch>
      </div> 
    </BrowserRouter>
  );
   }
}

export default App;
