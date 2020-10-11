
import React, { useState }  from 'react';
import moment from "moment";
import Log from './Log'
import FoodSearchBar from './FoodSearchBar';

const MyFoodLog = (props) => {

    const [day, setDay] = useState('')
    const [date, setDate] = useState(new Date())
    const [log, setLog] = useState(null)

    

    let newLogButton = (e) =>{
        e.preventDefault()
       
        fetch('http://localhost:3000/api/v1/daily_logs', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
                Authorization:  `Bearer ${localStorage.token}`
        },
            body: JSON.stringify({
                user_id: props.currentUser.id, 
                date: date, 
                day_number: day
        })
    })
        .then(resp => resp.json())
        .then(log => {
            setLog(log)
            console.log(log)
        })
    }

    return(<div>


        <h1>My Food Log</h1>

        
        

        <div>
                {log ? 
                    <div>
                        <h1>{log.day_number.toUpperCase()}</h1><br></br>
                        <FoodSearchBar />
                    </div>
                :
                <div>
                    <p>Start Log for Today </p>
        
                    <form onSubmit={(e) => newLogButton(e)}>
                        <select onChange={(e) => setDay(e.target.value)}>
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
                            <option value='day 10' >Day 10</option>
                            <option value='day 11' >Day 11</option>
                            <option value='day 12' >Day 12</option>
                            <option value='day 13' >Day 13</option>
                            <option value='day 14' >Day 14</option>
                            <option value='day 15' >Day 15</option>
                            <option value='day 16' >Day 16</option>
                            <option value='day 17' >Day 17</option>
                            <option value='day 18' >Day 18</option>
                            <option value='day 19' >Day 19</option>
                            <option value='day 20' >Day 20</option>
                            <option value='day 21' >Day 21</option>
                            <option value='day 22' >Day 22</option>
                            <option value='day 23' >Day 23</option>
                            <option value='day 24' >Day 24</option>
                            <option value='day 25' >Day 25</option>
                            <option value='day 26' >Day 26</option>
                            <option value='day 27' >Day 27</option>
                            <option value='day 28' >Day 28</option>
                            <option value='day 29' >Day 29</option>
                            <option value='day 30' >Day 30</option>
                        </select>
                        <input type="submit" ></input>
                    </form> 
            </div> 
            }
        </div>

    </div>)
}

// console.log(moment().format('MMMM Do YYYY')

export default MyFoodLog