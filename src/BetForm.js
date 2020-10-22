import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import GoalForm from './GoalForm';


const BetForm = (props) =>{

    const [betAmount, setAmount] = useState(0)
    const [goalSet, isSet] = useState(null)
    const history = useHistory()


let handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.amount.value)
    // console.log(props.currentUser)
    setAmount(e.target.amount.value)


    fetch('http://localhost:3000/api/v1/bets', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
                Authorization:  `Bearer ${localStorage.token}`
        },
            body: JSON.stringify({
                user_id: props.currentUser.id,
                amount: e.target.amount.value
            
        })
    })
        .then(resp => resp.json())
        .then(bet => {
           props.setCurrentBet(bet)
            console.log(bet)
        }
        )
}




    return(<div>
        <h1 className='goals-div'> Start Your 30 Day Log and Place Bet</h1>

        
        {goalSet ? 
        <div  className='goal-form'>
        <form className='goal-input' onSubmit={(e) =>{
            handleSubmit(e)
            history.push('/my_dash')
            props.createLogs()
            }}>
            <label>Enter Amount</label>
            <input className='goal-number-form' name="amount" type="number" placeholder='Bet Amount'></input><br></br>
            <input className='button' type="submit"/>
        </form>
        </div>
        :
        <GoalForm isSet={isSet} acceptGoal={props.acceptGoal}/>

            }
    </div>)
}

export default BetForm