import React, {useState} from 'react'


const GoalForm = (props) => {

    const [lbGoal, setgoal] = useState(null)
    const [getGoal, getCalGoal] = useState('')



let selectedOption = (e) => {
    e.preventDefault()
    
    if (getGoal === '1-pound')
        setgoal(1300)
    if (getGoal === '1.5-pound')
        setgoal(1250)
    if  (getGoal === '2-pound')
        setgoal(1200)
    
}

// let acceptGoal = () => {
    
//         fetch(`http://localhost:3000/api/v1/users/${props.currentUser.id}`, {
//             method: 'PATCH',
//             headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//                 Authorization:  `Bearer ${localStorage.token}`
//         },
//             body: JSON.stringify({
//                 calories:lbGoal
//         })
//     })
//         .then(resp => resp.json())
//         .then(user => {    
//             console.log(user.calories)
//             localStorage.calories = user.calories
//             // props.dailyCaloriesSet(user.calories)
//         })
// }

    return(<div>

        <h1>Goals</h1>
        <div>
        <p>How Much Weight Would You Like to Lose Per Week?</p>
        </div>
        
        <div>
            <form onSubmit={(e)=> selectedOption(e)}>

                <select onChange={(e) => getCalGoal(e.target.value)}>
                <option disabled selected value> </option>
                <option value='1-pound'>1 lb.</option>
                <option value='1.5-pound'>1.5 lbs.</option>
                <option value='2-pound'>2 lbs.</option>
                </select>
                <input type="submit" ></input>
            </form>
        </div>

        
        
        <div>

         {lbGoal === 1300 ? <div><h1>1300</h1><button onClick={() => {
         props.isSet(true)
         props.acceptGoal(lbGoal)
        }
        }>Accept Goal</button></div>

         : lbGoal === 1250 ?  <div><h1>1250</h1><button onClick={() =>{
            props.isSet(true)
            props.acceptGoal(lbGoal)
        }
        }>Accept Goal</button></div>

          : lbGoal === 1200 ? <div><h1>1200</h1><button onClick={() =>{
            props.isSet(true)
            props.acceptGoal(lbGoal)
        }    
        }>Accept Goal</button></div>
          : null
         
          }
        </div>



    </div>)
}

export default GoalForm
