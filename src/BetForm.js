import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const BetForm = (props) =>{

    const [betAmount, setAmount] = useState(props.currentUser.bank)
    const history = useHistory()


let handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.amount.value)
    // console.log(props.currentUser)
    props.setCurrentBet(e.target.amount.value)

    fetch('http://localhost:3000/api/v1/bets', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
                Authorization:  `Bearer ${localStorage.token}`
        },
            body: JSON.stringify({
                user_id: props.currentUser.id,
                amount: betAmount
            
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
        <h1> Start Your Bet</h1>

        <form onSubmit={(e) =>{
            handleSubmit(e)
            history.push('/my_bet_dash')
            }}>
            <label>Enter Amount</label>
            <input name="amount" type="number" placeholder='Bet Amount' value={betAmount}></input><br></br>
            <input type="submit"/>
        </form>

    </div>)
}

export default BetForm