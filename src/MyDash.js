import React, { Component, useEffect, useState } from 'react'
import { Line, Circle } from 'rc-progress';
import ProgressBar from "./ProgressBar";
import './App.css';

const MyDash = (props) => {
    let  {image, name, calories } = props.currentUser 

    const [currentUser, setUser] = useState({})
    


    useEffect(() => {
        // window.location.reload()
        // window.onload = function() {
        //     if(!window.location.hash) {
        //         window.location = window.location + '#loaded';
        //         window.location.reload();
        //     }
        // }
        fetch(`http://localhost:3000/api/v1/users/${props.currentUser.id}`,{
            method:'GET',
            headers: {  
                Authorization:`Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(user => {
            // localStorage.monthly_progress = user.logged
            console.log(user)
            setUser(user)})
    }, [])

    // useEffect(() => {
    //     fetch(`http://localhost:3000/api/v1/bets/${props.bet.id}`,{
    //         method:'GET',
    //         headers: {  
    //             Authorization:`Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(bet => {
    //         console.log(bet)
            
    //         })
    // }, [])

    return(
    
    <div >
       
        <h1>My Dash</h1><br></br><br></br>
        <h3>{`Hello ${name}!`}</h3>
        {props.currentUser.calories > 0 ?
        <h4>{`Daily Calories: ${props.currentUser.calories}`}</h4>
        :
        <h5>Please Place Your Bet on Your Bet Dash</h5>
    }

        <div className='card'>
            <img src={image} height="200px" width="200px"></img>

    {props.currentUser.monthly_progress === "null" ?
    null
    :
        <label>
        <progress id="file" max="100" value={Math.round(props.currentUser.monthly_progress * 100)}> </progress> {`${Math.round(props.currentUser.monthly_progress * 100)}%`}
        </label>

    }
            </div>

    </div>)
}

export default MyDash