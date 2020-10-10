import React from 'react'
import moment from "moment";

const MyFoodLog = (props) => {
    

    let newLogButton = (e) =>{
        e.preventDefault()
       
        console.log(e.target.value)
    //     fetch('http://localhost:3000/api/v1/daily_logs', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //             Authorization:  `Bearer ${localStorage.token}`
    //     },
    //         body: JSON.stringify({
    //             user_id: user.id, 
    //             date: '2020-10-09', 
    //             day_number: 'day 2'
      
    //     })
    // })
    //     .then(resp => resp.json())
    //     .then(console.log)
    }

    return(<div>

        <h1>My Food Log</h1>
        <p>Start Log for Today </p>
        {/* <button name='day 2' value={moment().format('MMMM Do YYYY')} onClick={(e) => newLogButton(e)}>{moment().format('MMMM Do YYYY')}</button> */}
        <form onSubmit={(e) => newLogButton(e)}>
                <select onChange={(e) => newLogButton(e)}>
                <option disabled selected value> </option>
                <option value='day 1' >Day 1</option>
                <option value='day 2' >Day 2</option>
                <option value='day 3' >Day 3</option>
                <option value='day 4' >Day 4</option>
                <option value='day 5' >Day 5</option>
                <option value='day 6' >Day 6</option>
                <option value='day 7' >Day 7</option>
                <option value='day 8' >Day 8</option>
                <option value='day 9' >Day 9</option>
                </select>
                <input type="submit" ></input>
            </form>

    </div>)
}

export default MyFoodLog