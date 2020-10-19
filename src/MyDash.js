import React, { Component, useEffect, useState } from 'react'
import { Line, Circle } from 'rc-progress';
import ProgressBar from "./ProgressBar";
import './App.css';
import { Progress } from 'semantic-ui-react'

const MyDash = (props) => {
    let  {image, name, calories } = props.currentUser 

    const [currentUser, setUser] = useState({})
    const [monthly_progress, setProgress] = useState(props.currentUser.monthly_progress)
    


    useEffect(() => {
        // window.location.reload()
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
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
            setUser(user)
            // setProgress(user.logged)
        })
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
                
        

            <div className='card'>
                <div className='image-div'>
                <p>{`Hello ${name}!`}</p>
                    <img className='card-image' src={image} height="190px" width="190px"></img>      
                </div>   

                {props.currentUser.calories > 0 ?
                        <div className='calories-div'>
                            <p>{`Daily Calories: ${props.currentUser.calories}`}</p>
                                {props.currentUser.calories - props.todays_calories > 0 ?
                                <p>{`Calories Remaining for Today: ${props.currentUser.calories - props.todays_calories}`}</p>
                                :
                                <p>{`Calories Exceeded Today: ${props.currentUser.calories - props.todays_calories}`}</p>
                            }
                        </div>
                            :
                            <h5>Please Place Your Bet on Your Bet Dash</h5>
                }
                    {props.monthly_progress === "null" ?
                    null
                    :
                        <div className='progress-bar'>
                            <p>Monthly Progress</p>
                            <label>
                            <progress id="file" max="100" value={Math.round(props.monthly_progress * 100)}> </progress> {`${Math.round(props.monthly_progress * 100)}%`}
                            </label>
                        </div>
                    }
            </div>

    </div>)
}

export default MyDash