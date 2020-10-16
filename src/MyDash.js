import React, { Component, useEffect, useState } from 'react'
import { Line, Circle } from 'rc-progress';
import ProgressBar from "./ProgressBar";

const MyDash = (props) => {
    let  {image, name, calories } = props.currentUser

    

    const [currentUser, setUser] = useState(null)
    // let firstName = () => {
    //     let stringArray = {name}.split(",")
    //     return stringArray[0];

    // }
    // useEffect(() => {
    //     fetch(`http://localhost:3000/api/v1/users/${props.currentUser.id}`,{
    //         method:'GET',
    //         headers: {  
    //             Authorization:`Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(user => {
    //         console.log(user)
    //         setUser(user)})
    // }, [])

    return(
    
    <div>

        <h1>My Dash</h1><br></br><br></br>
        <h3>{`Hello ${name}!`}</h3>
        {props.dailyCalories > 0 ?
        <h4>{`Daily Calories: ${props.dailyCalories}`}</h4>
        :
        <h5>Please Set Daily Calorie Goal In Your Profile</h5>
    }

        <div>
            <img src={image}></img>
        </div>
        
   

    </div>)
}

export default MyDash