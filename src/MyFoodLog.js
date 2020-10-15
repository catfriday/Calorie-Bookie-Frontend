
import React, { Fragment, useState }  from 'react';
import moment from "moment";
import Log from './Log'
import FoodSearchBar from './FoodSearchBar';
import { useHistory } from 'react-router-dom';

const MyFoodLog = (props) => {

    const [log_id, setId] = useState(null)
    // const [date, setDate] = useState(new Date())
    const [log, setLog] = useState(null)
    const [day_number, setDayNumber] = useState('')
    const [food_items, setFoodItems] = useState([])

    const history = useHistory();

   
    let newLogButton = (e) =>{
        e.preventDefault()
     
    //    setLog(true)
        fetch(`http://localhost:3000/api/v1/daily_logs/${log_id}`, {
            method: 'GET',
            headers: {
                Authorization:  `Bearer ${localStorage.token}`
        }
    })
        .then(resp => resp.json())
        .then(daily_log => {
            setFoodItems(daily_log.food_items)
            setLog(daily_log)
            setDayNumber(daily_log.day_number)
            console.log(daily_log)
        })
    }

    let updateLog = (e) => {
        console.log(e)
    }
   
    return(
    <div className='food-log'>
       
       {props.logsArray.length === 0 ?
       <Fragment>

           <br></br>
           <br></br>
           <h1>Please Start Your Daily 30 Log</h1>
       </Fragment>
       :
        <Fragment>
        <h1>My Food Log</h1>
      <form onSubmit={(e) => newLogButton(e)}>
        <select onChange={(e) => setId(e.target.value)}>
            <option disabled selected value> </option>
                {props.logsArray.map(log => {
                    return  <option value={log.id} data-value={log.day_number} >{`${log.day_number}`}</option>
                    })}  
        </select>
            <input type="submit" ></input>
     </form>
            {log ? 
                <Fragment>
                    <h1>{day_number.toUpperCase()}</h1><br></br>
                    <FoodSearchBar log={log} log_id={log_id} updateLog={setLog} setFoodItems={setFoodItems}/>
                </Fragment>
                :
                null}
                <Log log={log} food_items={food_items} setFoodItems={setFoodItems} setLog={setLog}/>
                </Fragment>
       }
                
    </div>)
}

// console.log(moment().format('MMMM Do YYYY')

export default MyFoodLog